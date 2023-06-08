import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Popup from './Warn/Popup'; // Importe o componente Popup
import './MainHome.css';

const MainHome = () => {
  const [showPopup, setShowPopup] = useState(true); // Adicione o estado para controlar a exibição do pop-up

  const closePopup = () => {
    setShowPopup(false); // Função para fechar o pop-up
  };

  return (
    <div className="container-app">
      {/* Renderize o pop-up condicionalmente */}
      {showPopup && (
        <Popup
          message="O projeto ainda está em fase de desenvolvimento, portanto, alguns módulos ainda estão incompletos. Em breve, todos os módulos serão preenchidos e estilizados."
          onClose={closePopup}
        />
      )}

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
