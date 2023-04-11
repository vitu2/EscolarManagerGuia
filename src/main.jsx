import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import FinanceiroMain from './pages/FinanceiroMain/FinanceiroMain.jsx';
import AcademicoMain from './pages/AcademicoMain/AcademicoMain.jsx';
import ContasContabeis from './components/gestãoFinanceira/ContasContabeis/ContasContabeis.jsx';
import Duplicatas from './components/gestãoFinanceira/Duplicatas/Duplicatas.jsx';
import Finalidade from './components/gestãoFinanceira/Finalidade/Finalidade.jsx';
import AlunoMatri from './components/gestãoAcademica/AlunoMatricula/AlunoMatri.jsx';
import AvNota from './components/gestãoAcademica/AvaliaçãoBoletim/AvNota.jsx';
import Cartão from './components/gestãoFinanceira/Cartão/Cartão.jsx';
import HistoricoCertificado from './components/gestãoAcademica/HistoricoCertificado/HistoricoCertificado';
import Renegociação from './components/gestãoFinanceira/Renegociação/Renegociação';
import NotasFiscais from './components/gestãoFinanceira/NotasFiscais/NotasFiscais';
import AcessoFrequencia from './components/acessoFrequencia/AcessoFrequencia';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'gestaoacademica',
        element: <AcademicoMain />,
      },
      {
        path: '/gestaoacademica/histocert',
        element: <HistoricoCertificado />,
      },
      {
        path: 'gestaoacademica/alunomatri',
        element: <AlunoMatri />,
      },
      {
        path: 'gestaoacademica/avboletim',
        element: <AvNota />,
      },
      {
        path: 'gestaofinanceira',
        element: <FinanceiroMain />,
      },
      {
        path: 'gestaofinanceira/contascontabeis',
        element: <ContasContabeis />,
      },
      {
        path: 'gestaofinanceira/duplicatas',
        element: <Duplicatas />,
      },
      {
        path: 'gestaofinanceira/finalidade',
        element: <Finalidade />,
      },
      {
        path: 'gestaofinanceira/cartao',
        element: <Cartão />,
      },
      {
        path: '/gestaofinanceira/renegociacao',
        element: <Renegociação />,
      },
      {
        path: '/gestaofinanceira/notasfiscais',
        element: <NotasFiscais />,
      },
      {
        path: 'acessofrequencia',
        element: <AcessoFrequencia />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
