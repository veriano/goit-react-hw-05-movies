import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios');


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieCredits(movieId).then(setReviews);
    },[movieId])

     async function fetchMovieCredits(id) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios(`${BASE_URL}review/${id}?api_key=${API_KEY}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <h1>Hello world</h1>
    )
}
export default Reviews;