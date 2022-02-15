import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
    return(
    <ul className={ s.List }>
        <li className={ s.Item }><NavLink to='/' className={ s.Base } activeClassName={ s.Active }><b>Home</b></NavLink></li>
        <li className={ s.Item }><NavLink to='/movies' className={ s.Base } activeClassName={ s.Active }><b>Movies</b></NavLink></li>
    </ul>
    )

}