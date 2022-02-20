import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios');


const Cast = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const [casting, setCasting] = useState(null);
    console.log(casting);

    useEffect(() => {
        fetchMovieCredits(movieId).then(data => setCasting(data));
    },[movieId])

     async function fetchMovieCredits(credit_id) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios(`${BASE_URL}credit/${credit_id}?api_key=${API_KEY}`);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1>This is Cast</h1>
        </>
    )

}
export default Cast ;