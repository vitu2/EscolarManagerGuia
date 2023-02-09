import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import './App.css';

const App = () => (

  <div>
    <NavMenu />
    <Outlet/>
  </div>
);
export default App;