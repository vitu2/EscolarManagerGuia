import React from 'react';
import './AcademicoMain.css';
import { Link } from 'react-router-dom';

function AcademicoMain() {
  return (
    <div>
      <figure className="links-container">
        <Link className="box-container" to="alunomatri">
          Aluno e Matricula
        </Link>
        <Link className="box-container" to="avboletim">
          Avaliação e Boletim
        </Link>
        <Link className="box-container" to="fichaaluno">
          Ficha Do Aluno
        </Link>
        <Link className="box-container" to="histocert">
          Historico e certificado
        </Link>
      </figure>
    </div>
  );
}

export default AcademicoMain;
