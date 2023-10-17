import { useState } from 'react';
import Navegador from './Navegador.js';
import Crear from './Crear.js';
import Admin from './Admin.js';
import Articulo from './Articulo';
import Main from './Main.js';
import { Routes, Route } from "react-router-dom";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <>
          <Navegador />
      <Routes>
        <Route path="/" element={<Main admin={admin} />} />
        <Route path="/Navegador" element={<Navegador />} />
        <Route path="/Crear" element={<Crear />}/>
        <Route path="/Admin" element={<Admin setAdmin={setAdmin} />}/>
        <Route path='/Articulo' element={<Articulo />} />
        <Route path="/posts/:id" element={<Articulo />}/>
      </Routes>

    </>
  );
}

export default App;