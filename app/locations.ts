export type ParticipationCountry = {
  code: string;
  name: string;
  commerce: boolean;
  cities: string[];
};

// Participation and commerce are intentionally separate.
// A country can join The Chaos Walk even when PlanetHike does not sell/ship merchandise there.
// Commerce is conservative for launch and can expand once Gelato delivery economics are verified.
export const participationCountries: ParticipationCountry[] = [
  { code: 'AU', name: 'Australia', commerce: true, cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'City not yet listed'] },
  { code: 'AT', name: 'Austria', commerce: true, cities: ['Vienna', 'Salzburg', 'Graz', 'City not yet listed'] },
  { code: 'BE', name: 'Belgium', commerce: true, cities: ['Brussels', 'Antwerp', 'Ghent', 'City not yet listed'] },
  { code: 'BR', name: 'Brazil', commerce: true, cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'City not yet listed'] },
  { code: 'CA', name: 'Canada', commerce: true, cities: ['Toronto', 'Vancouver', 'Montréal', 'Calgary', 'City not yet listed'] },
  { code: 'DK', name: 'Denmark', commerce: true, cities: ['Copenhagen', 'Aarhus', 'City not yet listed'] },
  { code: 'EE', name: 'Estonia', commerce: true, cities: ['Tallinn', 'Tartu', 'City not yet listed'] },
  { code: 'FI', name: 'Finland', commerce: true, cities: ['Helsinki', 'Tampere', 'City not yet listed'] },
  { code: 'FR', name: 'France', commerce: true, cities: ['Paris', 'Lyon', 'Marseille', 'Nice', 'City not yet listed'] },
  { code: 'DE', name: 'Germany', commerce: true, cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Düsseldorf', 'City not yet listed'] },
  { code: 'IE', name: 'Ireland', commerce: true, cities: ['Dublin', 'Cork', 'Galway', 'City not yet listed'] },
  { code: 'IT', name: 'Italy', commerce: true, cities: ['Milan', 'Rome', 'Florence', 'Turin', 'City not yet listed'] },
  { code: 'JP', name: 'Japan', commerce: true, cities: ['Tokyo', 'Osaka', 'Kyoto', 'City not yet listed'] },
  { code: 'NL', name: 'Netherlands', commerce: true, cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'City not yet listed'] },
  { code: 'NZ', name: 'New Zealand', commerce: true, cities: ['Auckland', 'Wellington', 'Christchurch', 'City not yet listed'] },
  { code: 'NO', name: 'Norway', commerce: true, cities: ['Oslo', 'Bergen', 'City not yet listed'] },
  { code: 'PL', name: 'Poland', commerce: true, cities: ['Warsaw', 'Kraków', 'Gdańsk', 'City not yet listed'] },
  { code: 'PT', name: 'Portugal', commerce: true, cities: ['Lisbon', 'Porto', 'City not yet listed'] },
  { code: 'SG', name: 'Singapore', commerce: true, cities: ['Singapore'] },
  { code: 'ES', name: 'Spain', commerce: true, cities: ['Madrid', 'Barcelona', 'Málaga', 'Valencia', 'Seville', 'City not yet listed'] },
  { code: 'SE', name: 'Sweden', commerce: true, cities: ['Stockholm', 'Gothenburg', 'Malmö', 'City not yet listed'] },
  { code: 'CH', name: 'Switzerland', commerce: true, cities: ['Zurich', 'Geneva', 'Basel', 'City not yet listed'] },
  { code: 'GB', name: 'United Kingdom', commerce: true, cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'City not yet listed'] },
  { code: 'US', name: 'United States', commerce: true, cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Seattle', 'Miami', 'Boston', 'City not yet listed'] },

  // Participation-only launch markets. Local walkers can create their own Chaos Fan where commerce is unavailable.
  { code: 'BW', name: 'Botswana', commerce: false, cities: ['Gaborone', 'City not yet listed'] },
  { code: 'CM', name: 'Cameroon', commerce: false, cities: ['Douala', 'Yaoundé', 'City not yet listed'] },
  { code: 'CI', name: "Côte d’Ivoire", commerce: false, cities: ['Abidjan', 'City not yet listed'] },
  { code: 'EG', name: 'Egypt', commerce: false, cities: ['Cairo', 'Alexandria', 'City not yet listed'] },
  { code: 'GH', name: 'Ghana', commerce: false, cities: ['Accra', 'Kumasi', 'City not yet listed'] },
  { code: 'KE', name: 'Kenya', commerce: false, cities: ['Nairobi', 'Mombasa', 'City not yet listed'] },
  { code: 'MA', name: 'Morocco', commerce: false, cities: ['Casablanca', 'Marrakesh', 'Rabat', 'City not yet listed'] },
  { code: 'NA', name: 'Namibia', commerce: false, cities: ['Windhoek', 'City not yet listed'] },
  { code: 'NG', name: 'Nigeria', commerce: false, cities: ['Lagos', 'Abuja', 'City not yet listed'] },
  { code: 'RW', name: 'Rwanda', commerce: false, cities: ['Kigali', 'City not yet listed'] },
  { code: 'SN', name: 'Senegal', commerce: false, cities: ['Dakar', 'City not yet listed'] },
  { code: 'ZA', name: 'South Africa', commerce: false, cities: ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria', 'City not yet listed'] },
  { code: 'TZ', name: 'Tanzania', commerce: false, cities: ['Dar es Salaam', 'Arusha', 'City not yet listed'] },
  { code: 'UG', name: 'Uganda', commerce: false, cities: ['Kampala', 'City not yet listed'] },
  { code: 'ZM', name: 'Zambia', commerce: false, cities: ['Lusaka', 'City not yet listed'] },
  { code: 'ZW', name: 'Zimbabwe', commerce: false, cities: ['Harare', 'City not yet listed'] },

  { code: 'AR', name: 'Argentina', commerce: false, cities: ['Buenos Aires', 'City not yet listed'] },
  { code: 'CL', name: 'Chile', commerce: false, cities: ['Santiago', 'City not yet listed'] },
  { code: 'CO', name: 'Colombia', commerce: false, cities: ['Bogotá', 'Medellín', 'City not yet listed'] },
  { code: 'CR', name: 'Costa Rica', commerce: false, cities: ['San José', 'City not yet listed'] },
  { code: 'MX', name: 'Mexico', commerce: false, cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'City not yet listed'] },
  { code: 'PE', name: 'Peru', commerce: false, cities: ['Lima', 'City not yet listed'] },
  { code: 'AE', name: 'United Arab Emirates', commerce: false, cities: ['Dubai', 'Abu Dhabi', 'City not yet listed'] },
  { code: 'IN', name: 'India', commerce: false, cities: ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'City not yet listed'] },
  { code: 'ID', name: 'Indonesia', commerce: false, cities: ['Jakarta', 'Bali / Denpasar', 'City not yet listed'] },
  { code: 'MY', name: 'Malaysia', commerce: false, cities: ['Kuala Lumpur', 'City not yet listed'] },
  { code: 'PH', name: 'Philippines', commerce: false, cities: ['Manila', 'Cebu', 'City not yet listed'] },
  { code: 'KR', name: 'South Korea', commerce: false, cities: ['Seoul', 'Busan', 'City not yet listed'] },
  { code: 'TH', name: 'Thailand', commerce: false, cities: ['Bangkok', 'Chiang Mai', 'City not yet listed'] },
  { code: 'VN', name: 'Vietnam', commerce: false, cities: ['Ho Chi Minh City', 'Hanoi', 'City not yet listed'] },
];

export const countryByCode = Object.fromEntries(
  participationCountries.map((country) => [country.code, country]),
) as Record<string, ParticipationCountry>;
