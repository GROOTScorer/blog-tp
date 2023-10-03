import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Navegador from './Navegador.js';
import Crear from './Crear.js';
import Admin from './Admin.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Navegador" element={<Navegador />} />
        <Route path="/Crear" element={<Crear />}/>
        <Route path="/Admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
