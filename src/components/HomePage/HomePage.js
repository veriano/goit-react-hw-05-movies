import { useState, useEffect } from 'react';
import { link } from 'react-router-dom';
const KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
const axios = require('axios');


const HomePage = () => {
    const[names, setNames] = useState(null);

    const fetchTrendyMovie = async () => {
        const fetch = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
        console.log(fetch);
        const trendyMovies = fetch.data.results;
        return trendyMovies;
    }
    useEffect(() => {
        fetchTrendyMovie().then(setNames);
    },[])
        return (
            <div>
                <h1>Trending today</h1>
                <ul>
                {names && names.map(name => <li key={ name.id }>
                                    <link to={`/movie/${name.id}`}>{ name }</link>
                                    </li>)}
                </ul>
            </div>
        )
}
export default HomePage;