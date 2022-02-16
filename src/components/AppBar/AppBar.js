import React from 'react';
import Navigation from 'components/Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
    return(
      <div className={ s.AppBar }>
        <Navigation />
      </div>
    )

}
export default AppBar;