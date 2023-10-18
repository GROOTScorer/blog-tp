import './Main.css'
import Prevista from './Prevista';
import { useState, useEffect } from 'react';

function Titulo() {
    useEffect(() => {
      document.title = 'AssemBlog';
    }, []);
  }  

function Main(props)
{
  function eliminarPost(id) {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const filtrado = posts.filter(post => post.titulo !== id);
  
  localStorage.setItem('posts', JSON.stringify(filtrado));
  
  // También eliminar comentarios
  const comentarios = JSON.parse(localStorage.getItem('comentarios'));
  const filtradoComentarios = comentarios.filter(comentario => comentario.titulopost !== id);

  localStorage.setItem('comentarios', JSON.stringify(filtradoComentarios));

  // Actualizar state
  setPosts(filtrado); 
}
    const [posts, setPosts] = useState([]);
    useEffect(() => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  if (posts) {
   setPosts(posts);
  }
}, []);

    return(
        <div className="Blog">
        <Titulo />
        <div className='container'>
        <header className="Blog-header">
          <h3>AssemBlog</h3>
        </header>
  
        {posts.map(post => (
          <Prevista id={post.titulo} key={post.titulo} titulo={post.titulo} autor={post.autor} sintesis={post.sintesis} admin={props.admin} />
  ))}
  
        <footer>AssemBlog - Creado por Gael De Luca, Joaquín Pocovi y Mateo Villegas</footer>
        </div>
      </div>
  
    )
}

export default Main;