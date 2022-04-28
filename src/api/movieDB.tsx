import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '76165c98ab9f82feeeb271506661e41d',
    language: 'es-ES',
  },
});

export default movieDB;
