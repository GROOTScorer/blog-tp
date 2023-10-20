import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './Navegador.css';

function Navegador() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = posts.filter(post =>
        post.titulo.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [searchQuery]);

  return (
    <div className="Nav">
      <nav>
        <Link to='/'>AssemBlog</Link>
        <ul className="navul">
          <li className="crear"><Link to='/Crear'>Crear un artículo</Link></li>
          <li className="admin"><Link to='/Admin'>Administrador</Link></li>

          <input
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          
          <div className="dropdown-container">
            {searchResults.length > 0 && (
              <div className="dropdown">
                <ul>
                  {searchResults.map((post, index) => (
                    <li key={index}>
                      <Link to={`/posts/${post.titulo}`}>{post.titulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <a href="https://github.com/GROOTScorer/blog-tp"><img alt="" className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
        </ul>
      </nav>
    </div>
  );
}

export default Navegador;