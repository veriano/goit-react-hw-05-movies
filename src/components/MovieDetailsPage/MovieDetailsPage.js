import { useState, useEffect } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import s from './MovieDetailsPage.module.css';
const axios = require('axios');


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId])
    
        
    async function fetchMovieById(id) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const movie = await axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieData = movie.data;
            const newMovieData = {
                ...movieData,
                release_date: movieData.release_date.slice(0, 4),
                genres: movieData.genres.slice(0, 3),
            };
            console.log(newMovieData);
            return newMovieData;
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
          
            {movie &&
                <>
                    <img src='*' alt={ movie.title } />
                    <div className={s.infoOfMovie}>
                    
                    <h1><b>{movie.title}({movie.release_date})</b></h1>
                    <p className={ s.text }>User Score: {movie.vote_average * 10}%</p>
                    <h2>Overview</h2>
                    <p className={ s.text }>{ movie.overview }</p>
                    <h3>Genres</h3>
                       
                    </div>
                </>
            }
            <>
            {movie &&
            <ul className={ s.listDetails }>
                <li><Link to={`/movies/${ movie.id }/cast`} className={ s.link }>Cast</Link></li>
                <li><Link to={`/movies/${ movie.id }/reviews`} className={ s.link }>Reviews</Link></li>
            </ul>}
            </>
        <Routes>
            <Route path='/movies/:movieId/cast' element={ <Cast /> } />

            <Route path='/movies/:movieId/reviews' element={ <Reviews /> } />
        </Routes> 
            
        </div>
        
    )
    
}

export default MovieDetailsPage;