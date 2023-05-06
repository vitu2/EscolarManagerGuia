import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavMenu from './Desktop/pages/NavMenu/NavMenu';
import './MainHome.css';
import SugestaoForm1 from './Desktop/pages/Form/Modal';

const DesktopNavBar = () => {
  return (
    <div className="container-app">
       <NavMenu />
      <Outlet />
      <SugestaoForm1/>
    </div>
  );
};

export default DesktopNavBar;
