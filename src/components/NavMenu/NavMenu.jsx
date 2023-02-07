import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <header className="nav-header">
      <nav className="nav-container">
        <ul className="nav-menu">
          <li>
            <Link to="/gestaoacademica">Gestão acadêmica</Link>
          </li>
          <li>
            <Link to="/gestaofinanceira">Gestão Financeira</Link>
          </li>
          <li>
            <Link to="/acessofrequencia">Acesso e Frequência</Link>
          </li>
          <li>
            <Link to="/estoque">Estoque</Link>
          </li>
          <li>
            <Link to="/nutre">Nutre</Link>
          </li>
          <li>
            <Link to="/simulado">Simulado</Link>
          </li>
          <li>
            <Link to="/publicacao">Publicações</Link>
          </li>
          <li>
            <Link to="/portalprofessor">Portal Professor</Link>
          </li>
          <li>
            <Link to="/logins">Logins</Link>
          </li>
          <li>
            <Link to="/outros">Outros</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
