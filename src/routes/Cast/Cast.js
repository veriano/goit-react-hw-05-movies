import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios');


const Cast = ({ casts = [] }) => {
    const { movieId } = useParams();
    const [castData, setCastData] = useState([]);
    console.log(castData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieCredits(movieId).then(data => setCastData(data));
    },[movieId])

    async function fetchMovieCredits(movieId) {
        setLoading(true);
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios.get(`movie/${movieId}credits?api_key=${API_KEY}`);
            console.log(response);
            const cast = await response.data.cast;
            console.log(cast);
            return cast;
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <h1>This is Cast</h1>
        </>
    )

}
export default Cast ;