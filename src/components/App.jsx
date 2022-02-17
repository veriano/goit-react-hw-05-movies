// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AppBar from './AppBar';
import NoMatch from './NoMatch';
import MoviesPage from'./MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';


function App () {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' index element={ <HomePage /> } />
        
        <Route path='/movies/:movieId/*' element={ <MovieDetailsPage /> } exact/>

        <Route path='/movies' element={ <MoviesPage /> } />

        <Route path='*' element={ <NoMatch /> } />
      </Routes>
      
    </div>
  );
}
export default App;
