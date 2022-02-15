import React from 'react';
const KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
const axios = require('axios');


const HomeView = () => {

    const fetchTrendyMovie = async () => {
        const fetch = await axios(`${BASE_URL}trending/get-trending?api_key=${KEY}`);
        const trendyMovies = fetch.data.results;
        return trendyMovies;
    }

   
    
}
export default HomeView;