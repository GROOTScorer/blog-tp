import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Blog">
      <div className='container'>
      <header className="Blog-header">
        <h3>AssemBlog</h3>
        <a href="https://github.com/GROOTScorer/blog-tp"><img className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
      </header>

      <input type="title" className='titulo'></input>

      <footer>AssemBlog - Creado por Mateo Villegas y Gael De Luca</footer>
      </div>
    </div>
  );
}

export default App;