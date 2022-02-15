import React from 'react';
import { Route } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';



const MovieDetailsPage = async () => {
    <>
    <Route path='/movies/:movieId/cast'>
        <Cast />
    </Route>

    <Route path='/movies/:movieId/reviews'>
        <Reviews />
    </Route>
    </>
}
export default MovieDetailsPage;