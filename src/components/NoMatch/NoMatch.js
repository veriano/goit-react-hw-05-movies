import React from 'react';
import { Link } from 'react-router-dom';
import s from './NoMatch.module.css';

const NoMatch = () => {
    return (
        <div>
            <h2 className={ s.title }>Nothing to see here!</h2>
            <p>
                <Link to="/" className={ s.text }>Go to the home page</Link>
            </p>
        </div>
    )

}
export default NoMatch;