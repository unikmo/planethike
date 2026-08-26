export type ParticipationCountry = {
  code: string;
  name: string;
  commerce: boolean;
  cities: string[];
};

const OTHER_CITY = 'City not yet listed';
const cities = (...items: string[]) => [...items, OTHER_CITY];

// Participation and commerce are intentionally separate.
// A country can join The Chaos Walk even when PlanetHike does not yet sell/ship merchandise there.
// City lists are intentionally broad so registration captures real demand rather than forcing most
// participants into an "other" field. The final option always accepts a city that is not listed.
export const participationCountries: ParticipationCountry[] = [
  { code: 'AU', name: 'Australia', commerce: true, cities: cities('Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Hobart', 'Darwin') },
  { code: 'AT', name: 'Austria', commerce: true, cities: cities('Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels') },
  { code: 'BE', name: 'Belgium', commerce: true, cities: cities('Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Bruges', 'Leuven', 'Namur', 'Mons') },
  { code: 'BR', name: 'Brazil', commerce: true, cities: cities('São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre', 'Belém', 'Goiânia', 'Campinas') },
  { code: 'CA', name: 'Canada', commerce: true, cities: cities('Toronto', 'Montréal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Québec City', 'Hamilton', 'Halifax', 'Victoria', 'Saskatoon', 'Regina') },
  { code: 'DK', name: 'Denmark', commerce: true, cities: cities('Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding') },
  { code: 'EE', name: 'Estonia', commerce: true, cities: cities('Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve') },
  { code: 'FI', name: 'Finland', commerce: true, cities: cities('Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Kuopio', 'Lahti') },
  { code: 'FR', name: 'France', commerce: true, cities: cities('Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Montpellier', 'Strasbourg', 'Bordeaux', 'Lille', 'Rennes', 'Grenoble') },
  { code: 'DE', name: 'Germany', commerce: true, cities: cities('Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Bonn', 'Münster', 'Aachen') },
  { code: 'IE', name: 'Ireland', commerce: true, cities: cities('Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Kilkenny', 'Drogheda') },
  { code: 'IT', name: 'Italy', commerce: true, cities: cities('Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania', 'Venice', 'Verona') },
  { code: 'JP', name: 'Japan', commerce: true, cities: cities('Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto', 'Kawasaki', 'Hiroshima', 'Sendai') },
  { code: 'NL', name: 'Netherlands', commerce: true, cities: cities('Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen', 'Maastricht') },
  { code: 'NZ', name: 'New Zealand', commerce: true, cities: cities('Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 'Palmerston North', 'Napier-Hastings', 'Queenstown') },
  { code: 'NO', name: 'Norway', commerce: true, cities: cities('Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen', 'Kristiansand', 'Tromsø', 'Ålesund') },
  { code: 'PL', name: 'Poland', commerce: true, cities: cities('Warsaw', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice') },
  { code: 'PT', name: 'Portugal', commerce: true, cities: cities('Lisbon', 'Porto', 'Braga', 'Coimbra', 'Funchal', 'Aveiro', 'Faro', 'Setúbal') },
  { code: 'SG', name: 'Singapore', commerce: true, cities: cities('Singapore') },
  { code: 'ES', name: 'Spain', commerce: true, cities: cities('Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma de Mallorca', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Granada') },
  { code: 'SE', name: 'Sweden', commerce: true, cities: cities('Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Umeå') },
  { code: 'CH', name: 'Switzerland', commerce: true, cities: cities('Zurich', 'Geneva', 'Basel', 'Lausanne', 'Bern', 'Winterthur', 'Lucerne', 'St. Gallen', 'Lugano') },
  { code: 'GB', name: 'United Kingdom', commerce: true, cities: cities('London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Edinburgh', 'Bristol', 'Sheffield', 'Newcastle', 'Nottingham', 'Cardiff', 'Belfast', 'Brighton', 'Leicester', 'Southampton') },
  { code: 'US', name: 'United States', commerce: true, cities: cities('New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin', 'San Francisco', 'Seattle', 'Denver', 'Boston', 'Miami', 'Atlanta', 'Washington, DC', 'Portland', 'Las Vegas', 'Minneapolis', 'Detroit', 'Charlotte', 'Nashville', 'New Orleans') },

  { code: 'BW', name: 'Botswana', commerce: false, cities: cities('Gaborone', 'Francistown', 'Maun', 'Molepolole', 'Kasane') },
  { code: 'CM', name: 'Cameroon', commerce: false, cities: cities('Douala', 'Yaoundé', 'Bamenda', 'Bafoussam', 'Garoua', 'Maroua', 'Ngaoundéré', 'Buea', 'Limbe', 'Kumba', 'Bertoua', 'Kribi') },
  { code: 'CI', name: 'Côte d’Ivoire', commerce: false, cities: cities('Abidjan', 'Bouaké', 'Yamoussoukro', 'San-Pédro', 'Korhogo', 'Daloa', 'Man') },
  { code: 'EG', name: 'Egypt', commerce: false, cities: cities('Cairo', 'Alexandria', 'Giza', 'Port Said', 'Suez', 'Mansoura', 'Tanta', 'Aswan', 'Luxor', 'Hurghada') },
  { code: 'GH', name: 'Ghana', commerce: false, cities: cities('Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Cape Coast', 'Tema', 'Koforidua', 'Ho') },
  { code: 'KE', name: 'Kenya', commerce: false, cities: cities('Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Nyeri', 'Malindi') },
  { code: 'MA', name: 'Morocco', commerce: false, cities: cities('Casablanca', 'Rabat', 'Marrakesh', 'Fes', 'Tangier', 'Agadir', 'Meknes', 'Oujda', 'Tetouan') },
  { code: 'NA', name: 'Namibia', commerce: false, cities: cities('Windhoek', 'Walvis Bay', 'Swakopmund', 'Rundu', 'Oshakati', 'Katima Mulilo') },
  { code: 'NG', name: 'Nigeria', commerce: false, cities: cities('Lagos', 'Abuja', 'Kano', 'Ibadan', 'Port Harcourt', 'Benin City', 'Kaduna', 'Enugu', 'Aba', 'Jos', 'Ilorin', 'Owerri', 'Abeokuta') },
  { code: 'RW', name: 'Rwanda', commerce: false, cities: cities('Kigali', 'Huye', 'Musanze', 'Rubavu', 'Muhanga') },
  { code: 'SN', name: 'Senegal', commerce: false, cities: cities('Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor', 'Touba') },
  { code: 'ZA', name: 'South Africa', commerce: false, cities: cities('Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Gqeberha', 'Bloemfontein', 'East London', 'Polokwane', 'Mbombela', 'Kimberley', 'Pietermaritzburg') },
  { code: 'TZ', name: 'Tanzania', commerce: false, cities: cities('Dar es Salaam', 'Dodoma', 'Mwanza', 'Arusha', 'Mbeya', 'Morogoro', 'Tanga', 'Zanzibar City') },
  { code: 'UG', name: 'Uganda', commerce: false, cities: cities('Kampala', 'Entebbe', 'Jinja', 'Mbarara', 'Gulu', 'Mbale', 'Fort Portal') },
  { code: 'ZM', name: 'Zambia', commerce: false, cities: cities('Lusaka', 'Kitwe', 'Ndola', 'Livingstone', 'Kabwe', 'Chingola', 'Solwezi') },
  { code: 'ZW', name: 'Zimbabwe', commerce: false, cities: cities('Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Masvingo', 'Victoria Falls', 'Kwekwe') },

  { code: 'AR', name: 'Argentina', commerce: false, cities: cities('Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'Mar del Plata', 'Salta', 'Santa Fe', 'San Miguel de Tucumán') },
  { code: 'CL', name: 'Chile', commerce: false, cities: cities('Santiago', 'Valparaíso', 'Viña del Mar', 'Concepción', 'Antofagasta', 'La Serena', 'Temuco', 'Puerto Montt') },
  { code: 'CO', name: 'Colombia', commerce: false, cities: cities('Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Pereira', 'Santa Marta', 'Manizales') },
  { code: 'CR', name: 'Costa Rica', commerce: false, cities: cities('San José', 'Alajuela', 'Cartago', 'Heredia', 'Liberia', 'Puntarenas', 'Limón') },
  { code: 'MX', name: 'Mexico', commerce: false, cities: cities('Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Querétaro', 'Mérida', 'Cancún', 'Toluca', 'San Luis Potosí', 'Aguascalientes') },
  { code: 'PE', name: 'Peru', commerce: false, cities: cities('Lima', 'Arequipa', 'Trujillo', 'Cusco', 'Chiclayo', 'Piura', 'Iquitos', 'Huancayo') },

  { code: 'AE', name: 'United Arab Emirates', commerce: false, cities: cities('Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Al Ain', 'Ras Al Khaimah', 'Fujairah') },
  { code: 'IN', name: 'India', commerce: false, cities: cities('Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kochi', 'Chandigarh', 'Indore', 'Bhopal', 'Nagpur', 'Bhubaneswar') },
  { code: 'ID', name: 'Indonesia', commerce: false, cities: cities('Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar', 'Yogyakarta', 'Bali / Denpasar', 'Palembang', 'Balikpapan') },
  { code: 'MY', name: 'Malaysia', commerce: false, cities: cities('Kuala Lumpur', 'George Town', 'Johor Bahru', 'Ipoh', 'Kota Kinabalu', 'Kuching', 'Malacca City', 'Shah Alam') },
  { code: 'PH', name: 'Philippines', commerce: false, cities: cities('Manila', 'Quezon City', 'Makati', 'Cebu', 'Davao City', 'Baguio', 'Iloilo City', 'Cagayan de Oro', 'Bacolod') },
  { code: 'KR', name: 'South Korea', commerce: false, cities: cities('Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Jeju City') },
  { code: 'TH', name: 'Thailand', commerce: false, cities: cities('Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Khon Kaen', 'Hat Yai', 'Nakhon Ratchasima') },
  { code: 'VN', name: 'Vietnam', commerce: false, cities: cities('Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hai Phong', 'Can Tho', 'Hue', 'Nha Trang', 'Da Lat') },
];

export const countryByCode = Object.fromEntries(
  participationCountries.map((country) => [country.code, country]),
) as Record<string, ParticipationCountry>;
