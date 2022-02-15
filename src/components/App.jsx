import { lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import s from './App.module.css';
const HomePage = lazy(() => import('./HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));


function App () {
  return (
    <div>
      <ul className={ s.List }>
        <li className={ s.Item }><NavLink to='/' className={ s.Base } activeClassName={ s.Active }><b>Home</b></NavLink></li>
        <li className={ s.Item }><NavLink to='/movies' className={ s.Base } activeClassName={ s.Active }><b>Movies</b></NavLink></li>
      </ul>

        <Routes>

          <Route exact path='/'  component={ HomePage } />

          <Route path='/movies' component={ MoviesPage } />

          <Route path='/movies/:movieId' component={ MovieDetailsPage } />

        </Routes>
    </div>
  );
}
export default App;
