import React from 'react'
import './FinanceiroMain.css'

function FinanceiroMain() {
  return (
    <div>
      <figure className='links-container'>
        <a className='box-container' href="/gestaofinaceira/contascontabeis">Contas Contabeis</a>
        <a className='box-container' href="/gestaofinaceira/duplicatas">Duplicatas</a>
        <a className='box-container' href="/gestaofinaceira/finalidade">Finalidade</a>
      </figure>
    </div>
  )
}

export default FinanceiroMain
