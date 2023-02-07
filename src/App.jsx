import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import FinanceiroMain from './pages/FinanceiroMain/FinanceiroMain.jsx';
import ContasContabeis from './components/gestão financeira/ContasContabeis/ContasContabeis.jsx';
import Duplicatas from './components/gestão financeira/Duplicatas/Duplicatas.jsx';
import Finalidade from './components/gestão financeira/Finalidade/Finalidade.jsx'
import './App.css';

const App = () => (

  <div>
    <NavMenu />
    <BrowserRouter>
      <Routes>
        <Route path="/gestaofinanceira" element={<FinanceiroMain />} />
        <Route path="/gestaofinanceira/contascontabeis" element={<ContasContabeis />} />
        <Route path="/gestaofinanceira/duplicatas" element={<Duplicatas />} />
        <Route path="/gestaofinanceira/finalidade" element={<Finalidade />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;