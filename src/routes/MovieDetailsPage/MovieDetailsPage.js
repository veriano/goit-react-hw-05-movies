import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import s from './MovieDetailsPage.module.css';
const axios = require('axios');

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    navigate(-1);
  };

  async function fetchMovieById(id) {
    const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    try {
      const movie = await axios(
        `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const movieData = movie.data;
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
    <>
      <div>
        {movie && (
          <>
            <button type="button" onClick={onGoBack} className={s.button}>
              &#8592; Go back
            </button>
            <div className={s.wrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
              <div className={s.infoOfMovie}>
                <h1>
                  <b>
                    {movie.title}({movie.release_date})
                  </b>
                </h1>
                <p className={s.text}>User Score: {movie.vote_average * 10}%</p>
                <h2>
                  <b>Overview</b>
                </h2>
                <p className={s.text}>{movie.overview}</p>
                <h2>
                  <b>Genres</b>
                </h2>
                <ul className={s.listOfGenres}>
                  {movie.genres.map(g => (
                    <li key={uuidv4()} className={s.item}>
                      <p className={s.text}>{g.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
        <>
          {movie && (
            <div className={s.containerOfDetails}>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link to={`/movies/${movie.id}/cast`} className={s.link}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to={`/movies/${movie.id}/reviews`} className={s.link}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
