const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const geoApiOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '98aba81127msh015409001b95627p11ea4bjsn6dcf3e2efa9e',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
};

export { GEO_API_URL, geoApiOptions };

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "59ca8f4f4e7267b4cde5fb27583103c4"