import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
    return(
        <>
            <nav className={ s.List }>
            <NavLink to='/goit-react-hw-05-movies' className={ s.Base }><b>Home</b></NavLink>
            <NavLink to='/movies' className={ s.Base } ><b>Movies</b></NavLink>
            </nav>
        </>
    )

}
export default Navigation;