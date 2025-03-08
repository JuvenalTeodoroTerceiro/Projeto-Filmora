import axios from 'axios';

//base da api:https://api.themoviedb.org/3/
//url da api: https://api.themoviedb.org/3/movie/now_playing?api_key=10be605e7f663358f136bac5e6db9323&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;