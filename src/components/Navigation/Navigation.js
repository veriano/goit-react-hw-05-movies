import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
    return(
        <>
            <nav>
                <ul className={s.List}>
                    <li><NavLink to='/goit-react-hw-05-movies' className={ s.Base }><b>Home</b></NavLink></li>
                    <li><NavLink to='/movies' className={s.Base} ><b>Movies</b></NavLink></li>
                </ul>
            </nav>
        </>
    )

}
export default Navigation;