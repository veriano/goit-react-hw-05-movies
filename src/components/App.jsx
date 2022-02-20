import { lazy, Suspense } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import AppBar from './AppBar';
import NoMatch from './NoMatch';
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));


function App () {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h1>...Загружаем</h1>}>
      <Routes>
        <Route path='/goit-react-hw-05-movies' index element={ <HomePage /> } />
        
        <Route path='/movies/:movieId/*' element={ <MovieDetailsPage /> } exact/>

        <Route path='/movies' element={ <MoviesPage /> } />

        <Route path='*' element={ <NoMatch /> } />

        <Route element={ <Outlet /> } />
      </Routes>
      </Suspense>
    </div>
  );
}
export default App;
