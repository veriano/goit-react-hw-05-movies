import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../routes/HomePage';
import AppBar from './AppBar';
import NoMatch from './NoMatch';
const MoviesPage = lazy(() => import('../routes/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../routes/MovieDetailsPage'));
const Cast = lazy(() => import('../routes/Cast'));
const Reviews = lazy(() => import('../routes/Reviews'));

export default function App() {
  return (
    <>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="/movies/" element={<MoviesPage />} />

            <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
