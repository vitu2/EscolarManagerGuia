import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import FinanceiroMain from './pages/FinanceiroMain/FinanceiroMain.jsx';
import ContasContabeis from './components/gestão financeira/ContasContabeis/ContasContabeis.jsx';
import Duplicatas from './components/gestão financeira/Duplicatas/Duplicatas.jsx';
import Finalidade from './components/gestão financeira/Finalidade/Finalidade.jsx'
import './App.css';

function App() {

  return (
    <div>
      <NavMenu/>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/"/> */}
          <Route exact path="/gestaofinaceira" element={<FinanceiroMain />}/>
          <Route exact path="/gestaofinaceira/contascontabeis" element={<ContasContabeis />}/>
          <Route exact path="/gestaofinaceira/duplicatas" element={<Duplicatas />}/>
          <Route exact path="/gestaofinaceira/finalidade" element={<Finalidade />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
