import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios');


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchMovieCredits(movieId).then(setCast);
    },[movieId])

     async function fetchMovieCredits(id) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios(`${BASE_URL}credit/${id}?api_key=${API_KEY}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <ul>
            { }
            </ul>
        </>
    )

}
export default Cast ;