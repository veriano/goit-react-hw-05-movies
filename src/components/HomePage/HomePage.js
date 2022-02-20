import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';
const KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
const axios = require('axios');


const HomePage = () => {
    const location = useLocation();
    console.log(location);
    const [names, setNames] = useState(null);
    
    useEffect(() => {
        fetchTrendyMovie().then(data => setNames(data));
    },[])

    const fetchTrendyMovie = async () => {
        const fetch = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
        console.log(fetch);
        const trendyMovies = fetch.data.results;
        return trendyMovies;
    }
   
        return (
            <div>
                <h1 className={ s.title }>Trending today</h1>
                <ul>
                {names && names.map(name => <li key={ name.id }>
                    <Link to={{
                        pathname:`/movies/${name.id}`,
                        state: { from: true },
                        }}
                        className={ s.linksOfMovies }><b>{ name.title }</b></Link>
                    </li>)}
                </ul>
            </div>
        )
}
export default HomePage;