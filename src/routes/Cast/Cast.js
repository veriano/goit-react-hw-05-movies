import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios');


const Cast = ({ casts = [] }) => {
    const { movieId } = useParams();
    const [castData, setCastData] = useState([]);
    console.log(castData);

    useEffect(() => {
        fetchMovieCredits(movieId).then(data => setCastData(data));
    },[movieId])

    async function fetchMovieCredits(movieId) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
            console.log(response);
            const cast = await response.data.cast;
            console.log(cast);
            return cast;
        } catch (error) {
            console.log(error);
        } 
    }
    return (
        <>
            <ul>
                {castData && castData.map(({ id, profile_path, name, original_name, character }) =>
                    <li key={ id }>
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${ profile_path }`} alt={ name } width='110'/>
                        <h3>{ original_name }</h3>
                        <h3>Character:  { character }</h3>
                    </li>)}
            </ul>
        </>
    )

}
export default Cast ;