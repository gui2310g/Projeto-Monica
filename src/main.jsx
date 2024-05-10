import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'

import Home from "./pages/Home/Home.jsx";
import History from './pages/Historia/Historia.jsx';
import Agenda from './pages/Agenda/AgendaPage.jsx';
import Lectures from './pages/Palestras/Palestras.jsx';
import Sponsor from './pages/Patrocinadores/Patrocinadores.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home/>} />
          <Route path='/Historia' element={<History/>} />
          <Route path='/Agenda' element={<Agenda/>} />
          <Route path='/Palestra' element={<Lectures/>} />
          <Route path='/Patrocinadores' element={<Sponsor/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
