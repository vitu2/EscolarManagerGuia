import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavMenu from './Desktop/pages/NavMenu/NavMenu';
import './MainHome.css';

const MainHome = () => {

  return (
    <div className='container-app'>
      
      <Outlet />

      <div className="container-link">
          <Link to="desktop/gestaoacademica" className="a">
            Desktop
          </Link>
          <Link to="/Web" className="a">
            Web
          </Link>
          <Link to="/Curso" className="a">
            Curso
          </Link>
      </div>
    </div>
  );
};


export default MainHome;
