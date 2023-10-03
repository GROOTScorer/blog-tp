import { useState, useEffect } from 'react';
import './App.css';
import Prevista from './Prevista';

function Titulo() {
  useEffect(() => {
    document.title = 'AssemBlog';
  }, []);
}

function App() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  if (posts) {
   setPosts(posts);
  }
}, []);
  return (
    <div className="Blog">
      <Titulo />
      <div className='container'>
      <header className="Blog-header">
        <h3>AssemBlog</h3>
      </header>

      {posts.map(post => (
        <Prevista key={post.title} title={post.title} author={post.author} summary={post.summary} />
))}

      <footer>AssemBlog - Creado por Gael De Luca, Joaquín Pocovi y Mateo Villegas</footer>
      </div>
    </div>
  );
}

export default App;