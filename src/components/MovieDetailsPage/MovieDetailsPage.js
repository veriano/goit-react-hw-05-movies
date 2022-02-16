import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Cast from '../Cast';
// import Reviews from '../Reviews';

const axios = require('axios');


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId])
    
        
    async function fetchMovieById(id) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const response = await axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
            console.log(response);
            const movieData = response.data;
            const newMovieData = {
                ...movieData,
                release_date: movieData.release_date.slice(0, 4),
                genres: movieData.genres.slice(0, 3),
            };
            return newMovieData;
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            {movie && movie.map(m => <li><img src={m.poster_path} alt={m.title}/></li>)}
        </div>
    )
}
    //     <>
    //     <Route path='/movies/:movieId/cast'>
    //         <Cast />
    //     </Route>

    //     <Route path='/movies/:movieId/reviews'>
    //         <Reviews />
    //     </Route>
    //     </>
    // }

export default MovieDetailsPage;