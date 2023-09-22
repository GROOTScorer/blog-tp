import './App.css';
import Prevista from './Prevista';

function App() {
  return (
    <div className="Blog">
      <div className='container'>
      <header className="Blog-header">
        <h3>AssemBlog</h3>
        <a href="https://github.com/GROOTScorer/blog-tp"><img className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
      </header>

      <Prevista />

      <footer>AssemBlog - Creado por Gael De Luca, Joaquín Pocovi y Mateo Villegas</footer>
      </div>
    </div>
  );
}

export default App;