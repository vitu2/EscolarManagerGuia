import React from 'react';
import './FinanceiroMain.css';
import { Link } from 'react-router-dom';

function FinanceiroMain() {
  return (
    <div>
      <figure className="links-financeiro-container">
        <Link
          className="box-container-financeiro"
          to="contascontabeis"
        >
          Contas Contabeis
        </Link>
        <Link
          className="box-container-financeiro"
          to="duplicatas"
        >
          Duplicatas
        </Link>
        <Link
          className="box-container-financeiro"
          to="finalidade"
        >
          Finalidade
        </Link>
        <Link
          className="box-container-financeiro"
          to="cartao"
        >
          Cartão
        </Link>
        <Link
          className="box-container-financeiro"
          to="renegociacao"
        >
          Renegociação
        </Link>
        <Link
          className="box-container-financeiro"
          to="notasfiscais"
        >
          Notas Fiscais
        </Link>
      </figure>
    </div>
  );
}

export default FinanceiroMain;
