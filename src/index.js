import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  App  from './components/App';
import './index.css';
const Cast = lazy(() => import('./routes/Cast'));
const Reviews = lazy(() => import('./routes/Reviews'));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      <Suspense fallback={<div>...Загружаем</div>}>
      <Routes>
        <Route path='/movies/:movieId/cast' element={ <Cast /> } />
        
        <Route path='/movies/:movieId/reviews' element={ <Reviews /> } />
      </Routes>
    </Suspense>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

