import React from 'react'
import './AcademicoMain.css'
import { Link } from 'react-router-dom'

function AcademicoMain() {
  return (
    <div>
      <figure className='links-container'>
        <Link className='box-container' to="/gestaoacademica/alunomatri">Aluno e Matricula</Link>
        <Link className='box-container' to="/gestaoacademica/avboletim">Avaliação e Boletim</Link>
        <Link className='box-container' to="/gestaoacademica/fichaaluno">Ficha Do Aluno</Link>
      </figure>
    </div>
  )
}

export default AcademicoMain
