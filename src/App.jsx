import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from './pages/NavMenu/NavMenu';
import './App.css';

const App = () => (

  <div>
    <NavMenu />
    <Outlet/>
  </div>
);
export default App;