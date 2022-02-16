import { useState } from 'react';
import s from './MoviesPage.module.css';

const MoviesPage = ({ onSubmitHandler }) => {
    const [name, setName] = useState('');

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

        onSubmitHandler({ name });

        setName('');
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
        </>
    )

}
export default MoviesPage;