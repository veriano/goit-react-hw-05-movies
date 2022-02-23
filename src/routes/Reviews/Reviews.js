import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';
const axios = require('axios');


const Reviews = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetchMovieCredits(movieId).then(setReviews);
    },[movieId])

     async function fetchMovieCredits(id) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
            return response.data.results;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <ul>
                {reviews && reviews.map(review =>
                    <li key={review.id}>
                        <h2>Author: {review.author}</h2>
                        <p className={s.text}>{review.content}</p>
                    </li>
                )}

                {(reviews.length < 1) && <p className={s.text}>We don't have any reviews for this movie.</p>}  
                    
                  
            </ul>

             
        </>
    )
}
export default Reviews;