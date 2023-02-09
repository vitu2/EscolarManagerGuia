import React from 'react'
import './FinanceiroMain.css'
import { Link } from 'react-router-dom'

function FinanceiroMain() {
  return (
    <div>
      <figure className='links-container'>
        <Link className='box-container' to="/gestaofinanceira/contascontabeis">Contas Contabeis</Link>
        <Link className='box-container' to="/gestaofinanceira/duplicatas">Duplicatas</Link>
        <Link className='box-container' to="/gestaofinanceira/finalidade">Finalidade</Link>
      </figure>
    </div>
  )
}

export default FinanceiroMain
