import { lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import s from './App.module.css';
// import Navigation from './Navigation';
const HomePage = lazy(() => import('./HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));


function App () {
  return (
    <div>
      <nav className={ s.List }>
        <NavLink exact to='/' className={ s.Base }><b>Home</b></NavLink>
        <NavLink to='/movies' className={ s.Base }><b>Movies</b></NavLink>
      </nav>
      
        {/* <Navigation /> */}

        <Routes>

          <Route exact path='/'  component={ HomePage } />

          <Route path='/movies' component={ MoviesPage } />

          <Route path='/movies/:movieId' component={ MovieDetailsPage } />

        </Routes>
    </div>
  );
}
export default App;
