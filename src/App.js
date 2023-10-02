import { useEffect } from 'react';
import './App.css';
import Prevista from './Prevista';

function Titulo() {
  useEffect(() => {
    document.title = 'AssemBlog';
  }, []);
}

function App() {
  return (
    <div className="Blog">
      <Titulo />
      <div className='container'>
      <header className="Blog-header">
        <h3>AssemBlog</h3>
      </header>

      <Prevista />

      <footer>AssemBlog - Creado por Gael De Luca, Joaquín Pocovi y Mateo Villegas</footer>
      </div>
    </div>
  );
}

export default App;