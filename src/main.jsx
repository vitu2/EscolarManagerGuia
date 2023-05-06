import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import MainHome from './MainHome';
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
import Renegociação from './Desktop/components/gestãoFinanceira/Renegociação/Renegociação';
import NotasFiscais from './Desktop/components/gestãoFinanceira/NotasFiscais/NotasFiscais';
import SugestaoForm from './Desktop/pages/Form/form';
import AcessoFrequencia from './Desktop/components/acessoFrequencia/AcessoFrequencia';
import DesktopNavBar from './DesktopNavBar';
import FichaAluno from './Desktop/components/gestãoAcademica/FichaAluno/FichaAluno';
import Estoque from './Desktop/components/estoque/Estoque';
import Nutre from './Desktop/components/nutre/Nutre';
import Simulado from './Desktop/components/simulado/Simulado';
import Publicacao from './Desktop/components/publicações/Publicacao';
import PortalProfessor from './Desktop/components/portalProfessor/PortalProfessor';
import Logins from './Desktop/components/logins/Logins';
import Outros from './Desktop/components/outros/Outros';
import SugestaoForm1 from './Desktop/pages/Form/Modal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainHome />,
  },
  {
    path: '/desktop',
    element: <DesktopNavBar />,
    children: [
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
        path: 'gestaoacademica/fichaaluno',
        element: <FichaAluno />,
      },
      {
        path: 'gestaofinanceira',
        element: <FinanceiroMain />,
      },
      {
        path: 'gestaofinanceira',
        element: <AcessoFrequencia />,
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
        element: <AcessoFrequencia />,
      },
      {
        path: 'estoque',
        element: <Estoque />,
      },
      {
        path: 'nutre',
        element: <Nutre />,
      },
      {
        path: 'simulado',
        element: <Simulado />,
      },
      {
        path: 'publicacao',
        element: <Publicacao />,
      },
      {
        path: 'portalprofessor',
        element: <PortalProfessor />,
      },
      {
        path: 'logins',
        element: <Logins />,
      },
      {
        path: 'outros',
        element: <Outros />,
      },
    ],
  },
  {
    path: 'sugestao',
    element: <SugestaoForm/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
