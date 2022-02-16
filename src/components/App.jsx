import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AppBar from './AppBar';
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));


function App () {
  return (
    <div>
      <AppBar />
      
      <HomePage />
      

        <Routes>

          <Route path='/' component={ HomePage } />

          <Route path='/movies' component={ MoviesPage } />

          <Route path='/movies/:movieId' component={ MovieDetailsPage } />

        </Routes>
    </div>
  );
}
export default App;
