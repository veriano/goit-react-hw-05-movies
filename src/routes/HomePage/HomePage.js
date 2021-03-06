import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
const KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
const axios = require('axios');


const HomePage = () => {
    const [names, setNames] = useState(null);
    
    useEffect(() => {
        fetchTrendyMovie().then(data => setNames(data));
    },[])

    const fetchTrendyMovie = async () => {
        const fetch = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
        const trendyMovies = fetch.data.results;
        return trendyMovies;
    }
   
        return (
            <div>
                <h1 className={ s.title }>Trending today</h1>
                <ul>
                {names && names.map(({ id, title }) => <li key={ id }>
                    <Link to={`/movies/${ id }`}
                        className={s.linksOfMovies}><b>{ title }</b>
                    </Link>
                    </li>)}
                </ul>
            </div>
        )
}
export default HomePage;