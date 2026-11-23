# Titan SMTP host refresh

No runtime code change. Force production rebuild so Vercel Production environment variable TITAN_SMTP_HOST is loaded after the mailbox provider's regional SMTP host was updated.

The production registration API must return `confirmation_email: sent` in a fresh signup before SMTP can be considered operational.
