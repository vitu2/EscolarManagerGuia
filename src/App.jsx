import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavMenu from './Desktop/pages/NavMenu/NavMenu';
import './App.css';
import SugestaoForm1 from './Desktop/pages/Form/Modal';
import Vazio from './vazio';

const App = () => {
  const [desktopClicked, setDesktopClicked] = useState(false);
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const handleDesktopClick = () => {
    setDesktopClicked(true);
    setNavMenuVisible(true);
    setMenuClicked(false);
  };

  const handleNavItemClick = () => {
    setDesktopClicked(false);
    setNavMenuVisible(false);
    setMenuClicked(true);
  };

  const handleContainerClick = () => {
    const container = document.querySelector('.container-link');
    container.classList.add('clicked');
  }

  return (
    <div className='container-app'>
      {navMenuVisible && <NavMenu onItemClick={handleNavItemClick} />}
      
      <Outlet />

      <div className="container-link" onClick={handleContainerClick}>
        {!desktopClicked && (
          <Link to="/gestaoacademica" onClick={handleDesktopClick} className="a">
            Desktop
          </Link>
        )}
        {!desktopClicked && (
          <Link to="/Web" onClick={handleDesktopClick} className="a">
            Web
          </Link>
        )}
        {!desktopClicked && (
          <Link to="/Curso" onClick={handleDesktopClick} className="a">
            Curso
          </Link>
        )}
        <br />
      <SugestaoForm1/>
      </div>
    </div>
  );
};


export default App;
