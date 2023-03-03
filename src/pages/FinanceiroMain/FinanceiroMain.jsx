import React from 'react';
import './FinanceiroMain.css';
import { Link } from 'react-router-dom';

function FinanceiroMain() {
  return (
    <div>
      <figure className="links-financeiro-container">
        <Link
          className="box-container-financeiro"
          to="/gestaofinanceira/contascontabeis"
        >
          Contas Contabeis
        </Link>
        <Link
          className="box-container-financeiro"
          to="/gestaofinanceira/duplicatas"
        >
          Duplicatas
        </Link>
        <Link
          className="box-container-financeiro"
          to="/gestaofinanceira/finalidade"
        >
          Finalidade
        </Link>
        <Link
          className="box-container-financeiro"
          to="/gestaofinanceira/cartao"
        >
          Cartão
        </Link>
        <Link
        className='box-container-financeiro'
        to='/gestaofinanceira/renego'>
          Renegociação
          </Link>
      </figure>
    </div>
  );
}

export default FinanceiroMain;
