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