import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  App  from './components/App';
import './index.css';
import Cast from './routes/Cast';
import Reviews from './routes/Reviews';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      <Routes>
        <Route path='/movies/:movieId/cast' element={ <Cast /> } />
        
        <Route path='/movies/:movieId/reviews' element={ <Reviews /> } />
      </Routes>
    
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

