import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './MoviesPage.module.css';
const axios = require('axios');

const MoviesPage = () => {
    const [name, setName] = useState('');
    const [values, setValues] = useState(null);

    const handleChange = e => {
        const { value } = e.currentTarget;

        setName(value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(name.trim() === '') {
            alert('Пожалуйста введите поисковое слово.');
            return;
        }

        fetchMoviesSearch(name).then(data => setValues(data));

        setName('');
    }

    async function fetchMoviesSearch(query) {
        const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
        const BASE_URL = 'https://api.themoviedb.org/3/';

        try {
            const movie = await axios.get(
                `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
            console.log(movie.data.results);
            return movie.data.results;
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <form className={ s.SearchForm } onSubmit={ handleSubmit }>
            <input
                className={ s.SearchFormInput }
                type="text"
                onChange={ handleChange }
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
            />
            <button type="submit" className={ s.SearchFormButton }>
                <span className={ s.SearchFormButtonLabel }>Search</span>
            </button>
            </form>

            <ul>
                {values && values.map(value => <li key={value.id}><Link to={`/movies/${value.id}`} className={ s.linksOfMovies }><b>{value.original_title}</b></Link></li>)}
            </ul>
        </>
    )

}
export default MoviesPage;