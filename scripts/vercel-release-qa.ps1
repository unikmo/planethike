param(
  [string]$Deployment = 'https://planethike-git-wbp-seo-e2e-cities-20260826-unikmos-projects.vercel.app',
  [string]$Scope = 'unikmos-projects'
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
  throw 'Vercel CLI is not installed. Run: npm install -g vercel@latest'
}
if (-not (Get-Command curl.exe -ErrorAction SilentlyContinue)) {
  throw 'curl.exe is required by vercel curl on Windows.'
}

function Get-EnvValue([string]$Path, [string]$Name) {
  $prefix = "$Name="
  $line = Get-Content -LiteralPath $Path | Where-Object { $_.StartsWith($prefix) } | Select-Object -First 1
  if (-not $line) { throw "Missing $Name in pulled Vercel environment." }
  $value = $line.Substring($prefix.Length).Trim()
  if (($value.StartsWith('"') -and $value.EndsWith('"')) -or ($value.StartsWith("'") -and $value.EndsWith("'"))) {
    $value = $value.Substring(1, $value.Length - 2)
  }
  return $value
}

function Extract-Title([string]$Html) {
  $match = [regex]::Match($Html, '<title[^>]*>(.*?)</title>', [System.Text.RegularExpressions.RegexOptions]::Singleline -bor [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if ($match.Success) { return [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value).Trim() }
  return $null
}

function Extract-Canonical([string]$Html) {
  $tag = [regex]::Match($Html, '<link[^>]*rel=["'']canonical["''][^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if (-not $tag.Success) {
    $tag = [regex]::Match($Html, '<link[^>]*href=["''][^"'']+["''][^>]*rel=["'']canonical["''][^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  }
  if ($tag.Success) {
    $href = [regex]::Match($tag.Value, 'href=["'']([^"'']+)["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if ($href.Success) { return $href.Groups[1].Value.Trim() }
  }
  return $null
}

function Invoke-VercelCurl([string]$Path, [string]$OutputFile) {
  $status = & vercel curl $Path --deployment $Deployment --scope $Scope --no-color --silent --show-error --location --output $OutputFile --write-out '%{http_code}'
  if ($LASTEXITCODE -ne 0) { throw "vercel curl failed for $Path" }
  return [int]($status | Select-Object -Last 1)
}

Write-Host "PlanetHike Vercel release QA" -ForegroundColor Cyan
Write-Host "Deployment: $Deployment"
Write-Host "Scope:      $Scope"

# Confirm the CLI session before doing anything else.
& vercel whoami --no-color | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'Vercel CLI is not logged in. Run: vercel login' }

$tempRoot = Join-Path $env:TEMP ("planethike-vercel-qa-" + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $tempRoot | Out-Null
$envFile = Join-Path $tempRoot 'production.env'

try {
  # Pull to a temporary file only. The file is deleted in finally and values are never printed.
  & vercel env pull $envFile --environment=production --yes --scope $Scope --no-color | Out-Null
  if ($LASTEXITCODE -ne 0) { throw 'Unable to pull production environment variables from Vercel.' }

  $supabaseUrl = Get-EnvValue $envFile 'SUPABASE_URL'
  $supabaseKey = Get-EnvValue $envFile 'SUPABASE_PUBLISHABLE_KEY'
  $encodedUrl = [uri]::EscapeDataString($supabaseUrl)
  $encodedKey = [uri]::EscapeDataString($supabaseKey)

  Write-Host "`n[1/5] Vercel build/deployment endpoint" -ForegroundColor Yellow
  $homeFile = Join-Path $tempRoot 'home.html'
  $homeStatus = Invoke-VercelCurl '/' $homeFile
  if ($homeStatus -ne 200) { throw "Homepage returned HTTP $homeStatus" }
  Write-Host "PASS homepage HTTP 200"

  Write-Host "`n[2/5] Sitemap routes + SEO metadata" -ForegroundColor Yellow
  $sitemapFile = Join-Path $tempRoot 'sitemap.xml'
  $sitemapStatus = Invoke-VercelCurl '/sitemap.xml' $sitemapFile
  if ($sitemapStatus -ne 200) { throw "Sitemap returned HTTP $sitemapStatus" }

  [xml]$sitemap = Get-Content -LiteralPath $sitemapFile -Raw
  $routes = @($sitemap.urlset.url.loc | ForEach-Object { ([uri]$_).AbsolutePath })
  $routes += '/city-leads/apply'
  $routes = @($routes | Sort-Object -Unique)

  $pageResults = @()
  foreach ($route in $routes) {
    $safe = ($route.Trim('/') -replace '[^a-zA-Z0-9_-]', '_')
    if (-not $safe) { $safe = 'home' }
    $file = Join-Path $tempRoot ("page-$safe.html")
    $status = Invoke-VercelCurl $route $file
    $html = Get-Content -LiteralPath $file -Raw
    $title = Extract-Title $html
    $canonical = Extract-Canonical $html
    $pageResults += [pscustomobject]@{
      Route = $route
      Status = $status
      Title = $title
      Canonical = $canonical
      Pass = ($status -eq 200 -and $title -and $canonical)
    }
  }

  $duplicateTitles = @($pageResults | Where-Object Title | Group-Object Title | Where-Object Count -gt 1)
  $duplicateCanonicals = @($pageResults | Where-Object Canonical | Group-Object Canonical | Where-Object Count -gt 1)
  $pageFailures = @($pageResults | Where-Object { -not $_.Pass })

  Write-Host ("Checked {0} rendered routes." -f $pageResults.Count)
  if ($pageFailures.Count -eq 0) { Write-Host 'PASS all routes returned 200 with title + canonical' }
  else { Write-Host "FAIL $($pageFailures.Count) routes missing HTTP/title/canonical" -ForegroundColor Red }
  if ($duplicateTitles.Count -eq 0) { Write-Host 'PASS no duplicate page titles in tested routes' }
  else { Write-Host "FAIL duplicate titles: $($duplicateTitles.Name -join '; ')" -ForegroundColor Red }
  if ($duplicateCanonicals.Count -eq 0) { Write-Host 'PASS no duplicate canonicals in tested routes' }
  else { Write-Host "FAIL duplicate canonicals: $($duplicateCanonicals.Name -join '; ')" -ForegroundColor Red }

  Write-Host "`n[3/5] Participant / City Lead / Contact API E2E" -ForegroundColor Yellow
  $qaPath = "/api/qa/e2e?supabase_url=$encodedUrl&supabase_key=$encodedKey"
  $qaFile = Join-Path $tempRoot 'api-qa.json'
  $qaStatus = Invoke-VercelCurl $qaPath $qaFile
  if ($qaStatus -ne 200) { throw "QA API returned HTTP $qaStatus" }
  $qaRaw = Get-Content -LiteralPath $qaFile -Raw
  $qa = $qaRaw | ConvertFrom-Json
  if ($qa.ok -ne $true) {
    Write-Host $qaRaw
    throw 'One or more deployed form/API QA checks failed.'
  }
  Write-Host 'PASS valid participant registration'
  Write-Host 'PASS participant privacy validation'
  Write-Host 'PASS unknown-city validation'
  Write-Host 'PASS custom-city registration'
  Write-Host 'PASS valid City Lead application'
  Write-Host 'PASS City Lead safety validation'
  Write-Host 'PASS valid contact submission'
  Write-Host 'PASS contact privacy validation'
  Write-Host 'PASS contact topic validation'

  Write-Host "`n[4/5] Critical public assets" -ForegroundColor Yellow
  $assets = @('/icon.svg','/visuals/chaos-hero.webp','/visuals/community-mismatched.webp','/visuals/chaos-woman.webp','/visuals/chaos-fan-editorial.webp')
  $assetFailures = @()
  foreach ($asset in $assets) {
    $file = Join-Path $tempRoot ('asset-' + ($asset -replace '[^a-zA-Z0-9]', '_'))
    $status = Invoke-VercelCurl $asset $file
    if ($status -ne 200) { $assetFailures += "$asset ($status)" }
  }
  if ($assetFailures.Count -eq 0) { Write-Host 'PASS favicon + approved visual assets return HTTP 200' }
  else { Write-Host "FAIL assets: $($assetFailures -join ', ')" -ForegroundColor Red }

  Write-Host "`n[5/5] Release verdict" -ForegroundColor Yellow
  $allPass = $homeStatus -eq 200 -and $pageFailures.Count -eq 0 -and $duplicateTitles.Count -eq 0 -and $duplicateCanonicals.Count -eq 0 -and $qa.ok -eq $true -and $assetFailures.Count -eq 0

  $report = [pscustomobject]@{
    deployment = $Deployment
    timestamp_utc = [DateTime]::UtcNow.ToString('o')
    pass = $allPass
    routes_checked = $pageResults.Count
    qa_email = $qa.qaEmail
    failed_routes = @($pageFailures | Select-Object Route,Status,Title,Canonical)
    duplicate_titles = @($duplicateTitles | ForEach-Object Name)
    duplicate_canonicals = @($duplicateCanonicals | ForEach-Object Name)
    failed_assets = $assetFailures
    form_tests = $qa.tests
  }

  $reportPath = Join-Path $repo 'vercel-qa-result.json'
  $report | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $reportPath -Encoding utf8

  if ($allPass) {
    Write-Host "PASS — VERCEL PREVIEW RELEASE QA" -ForegroundColor Green
  } else {
    Write-Host "FAIL — DO NOT PROMOTE" -ForegroundColor Red
  }
  Write-Host "Report: $reportPath"
  Write-Host "QA email: $($qa.qaEmail)"

  $pageResults | Format-Table Route,Status,Title -AutoSize
  if (-not $allPass) { exit 1 }
}
finally {
  Remove-Item -LiteralPath $tempRoot -Recurse -Force -ErrorAction SilentlyContinue
}
