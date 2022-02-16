import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
    return(
        <>
            <nav className={ s.List }>
            <NavLink to='/' className={ s.Base }><b>Home</b></NavLink>
            <NavLink to='/movies' className={ s.Base }><b>Movies</b></NavLink>
            </nav>
        </>
    )

}