import React from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <header className="nav-header">
      <nav className="nav-container">
        <ul className="nav-menu">
          {/* <li>
            <Link to="/gestaoacademica">Gestão acadêmica</Link>
          </li> */}
          <li>
            <Link to="/gestaofinanceira">Gestão Financeira</Link>
          </li>
          {/* <li>
            <a href={"/acessofrequencia"}>Acesso e Frequência</a>
          </li>
          <li>
            <a href={"/estoque"}>Estoque</a>
          </li>
          <li>
            <a href={"/nutre"}>Nutre</a>
          </li>
          <li>
            <a href={"/simulado"}>Simulado</a>
          </li>
          <li>
            <a href={"/publicacao"}>Publicações</a>
          </li>
          <li>
            <a href={"/portalprofessor"}>Portal Professor</a>
          </li>
          <li>
            <a href={"/logins"}>Logins</a>
          </li>
          <li>
            <a href={"/outros"}>Outros</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
