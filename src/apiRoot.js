// OMDB base url
export const OMDB_API_ROOT = `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

// flexible backend base url to allow for development and production
const DEV_URL = 'http://localhost:3001';

const PROD_URL = 'https://jschacter-shoppies-api.herokuapp.com';

export const BACKEND_API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;