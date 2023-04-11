import React from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';

const NavMenu = () => {

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <ul className="nav-menu">
          <li>
            <Link className='color-link' to="/gestaoacademica">
              Gestão acadêmica
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/gestaofinanceira">
              Gestão Financeira
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/acessofrequencia">
              Acesso e Frequência
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/estoque">
              Estoque
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/nutre">
              Nutre
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/simulado">
              Simulado
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/publicacao">
              Publicações
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/portalprofessor">
              Portal Professor
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/logins">
              Logins
            </Link>
          </li>
          <li>
            <Link className='color-link' to="/outros">
              Outros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
