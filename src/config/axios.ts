import axios from 'axios';

const API = axios.create({
  baseURL: 'https://led-api.herokuapp.com',
});

export default API;
