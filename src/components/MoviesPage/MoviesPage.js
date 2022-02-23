import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import slugify from 'slugify';
import s from './MoviesPage.module.css';
const axios = require('axios');

const MoviesPage = () => {
    const { pathname } = useLocation();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies")));
    let [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');

    useEffect(() => {
        if (!searchQuery) return;
        let abortController = new AbortController();

        async function fetchMoviesSearch() {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

            try {
            const movie = await axios.get(
                `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`, {signal: abortController.signal,});
                
                if (movie.data.results.length < 1) {
                alert('Пожалуйста введите корректное название или возможно такой фильм не найден');
                return;
                }

                if (!abortController.signal.aborted) {
                    let data = await movie.data.results;
                    setMovies(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (searchQuery) {
            fetchMoviesSearch();
        }

        return () => {
            abortController.abort();
        };
    }, [ searchQuery ]);

    useEffect(() => {
        if(movies) {
         localStorage.setItem("movies",JSON.stringify(movies));  
        }
    },[movies])

    // const makeSlug = string => slugify(string,{ replacement:'=', lower: true });

    const handleChange = e => {
        const { value } = e.currentTarget;

        setQuery(value);
    }

    const onSubmit = e => { 
        e.preventDefault();

        if (query.trim() === '') {
            alert('Пожалуйста введите поисковое слово.');
            return;
        }

        let formData = new FormData(e.currentTarget);
        let newQuery = formData.get("query");
        if (!newQuery) return;
        setSearchParams({ query: newQuery });

        setQuery('');
    }


    return(
        <>
            <form className={ s.SearchForm } onSubmit={ onSubmit }>
            <input defaultValue={ searchQuery ?? undefined }
                className={ s.SearchFormInput }
                    type="text"
                    name="query"
                onChange={ handleChange }
                autoComplete="off"
                // autoFocus
                placeholder="Search movies"
            />
            <button type="submit" className={ s.SearchFormButton }>
                <span className={ s.SearchFormButtonLabel }>Search</span>
            </button>
            </form>

            <ul>
                {movies && movies.map(movie => <li key={movie.id}>
                    <Link to={`${pathname}/${ movie.id }`} 
                    className={ s.linksOfMovies }><b>{movie.original_title}</b></Link></li>)
                }
            </ul>
        </>
    )

}
export default MoviesPage;