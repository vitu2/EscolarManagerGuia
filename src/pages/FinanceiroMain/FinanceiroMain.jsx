import React from 'react'
import './FinanceiroMain.css'
import { Link } from 'react-router-dom'

function FinanceiroMain() {
  return (
    <div>
      <figure className='links-container'>
        <a className='box-container' href={"/gestaofinanceira/contascontabeis"}>Contas Contabeis</a>
        <a className='box-container' href={"/gestaofinanceira/duplicatas"}>Duplicatas</a>
        <a className='box-container' href={"/gestaofinanceira/finalidade"}>Finalidade</a>
      </figure>
    </div>
  )
}

export default FinanceiroMain
