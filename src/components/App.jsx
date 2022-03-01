import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AppBar from './AppBar';
import NoMatch from './NoMatch';
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));
const Cast = lazy(() => import('../routes/Cast'));
const Reviews = lazy(() => import('../routes/Reviews'));


// function App () {
//   return (
//     <div>
//       <AppBar />
//       <Suspense fallback={<h1>Загружаем...</h1>}>
//       <Routes>
//         <Route path='/goit-react-hw-05-movies' index element={<HomePage />} />
        
//         <Route path='/movies/:movieId/*' element={<MovieDetailsPage />} />

//         <Route path='/movies' element={<MoviesPage />} />
          
//         <Route path='*' element={<NoMatch />} />

//         <Route element={<Outlet />} />
//       </Routes>
//       </Suspense>
//     </div>
//   );
// }
// export default App;
export default function App() {
  return (
    <>
     <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>} >
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<HomePage />} />

            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />

              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
            {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
}