import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import FinanceiroMain from './Desktop/pages/FinanceiroMain/FinanceiroMain';
import AcademicoMain from './Desktop/pages/AcademicoMain/AcademicoMain.jsx';
import ContasContabeis from './Desktop/components/gestãoFinanceira/ContasContabeis/ContasContabeis.jsx';
import Duplicatas from './Desktop/components/gestãoFinanceira/Duplicatas/Duplicatas.jsx';
import Finalidade from './Desktop/components/gestãoFinanceira/Finalidade/Finalidade.jsx';
import AlunoMatri from './Desktop/components/gestãoAcademica/AlunoMatricula/AlunoMatri.jsx';
import AvNota from './Desktop/components/gestãoAcademica/AvaliaçãoBoletim/AvNota.jsx';
import Cartão from './Desktop/components/gestãoFinanceira/Cartão/Cartão.jsx';
import HistoricoCertificado from './Desktop/components/gestãoAcademica/HistoricoCertificado/HistoricoCertificado';
import Temp from './Desktop/components/acessoFrequencia/temp';
import Renegociação from './Desktop/components/gestãoFinanceira/Renegociação/Renegociação';
import NotasFiscais from './Desktop/components/gestãoFinanceira/NotasFiscais/NotasFiscais';
import SugestaoForm from './Desktop/pages/Form/form';
import Vazio from './vazio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'sugestao',
        element: <SugestaoForm />,
      },
      {
        path:'desktop',
        element: <Vazio/>
      },
      {
        path: 'gestaoacademica',
        element: <AcademicoMain />,
      },
      {
        path: 'gestaoacademica/histocert',
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
        path: 'gestaofinanceira/renegociacao',
        element: <Renegociação />,
      },
      {
        path: 'gestaofinanceira/notasfiscais',
        element: <NotasFiscais />,
      },
      {
        path: 'acessofrequencia',
        element: <Temp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
