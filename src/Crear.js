import React, { useState, useEffect } from 'react';
import './Crear.css';

function Titulo() {
    useEffect(() => {
      document.title = 'Crear un post';
    }, []);
  }
    //localStorage.setItem('posts', JSON.stringify(posts));

function Crear()
{
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        titulo: '',
        sintesis: '',
        autor: '',
        area: ''
    });

    function handleSubmit(e)
    {
        e.preventDefault();
        savePost();
        setPost({
            titulo: '',
            sintesis: '',
            autor: '',
            area: ''
        })
    }
  
    useEffect(() => {
      const storedPosts = localStorage.getItem('posts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    }, []);

    function handleChange(e)
    {
        let name = e.target.name;
        let value = e.target.value;
        setPost({... post, [name]: value});
    }
  
    const savePost = () => {
      localStorage.setItem('posts', JSON.stringify([post, ...posts]));
      
    }

    return(
        <div className="containerCrear">
            <Titulo />
            <form onSubmit={handleSubmit}>
            <input className='titulo' name="titulo" value={post.titulo} placeholder='Título' onChange={handleChange}></input>
            <textarea className='sintesis' name="sintesis" value={post.sintesis} placeholder='Síntesis del artículo' onChange={handleChange}></textarea>
            <input className='autor' name='autor' value={post.autor} placeholder='Creador por...' onChange={handleChange}></input>
            <textarea className='area' name='area' value={post.area} placeholder='Comienza a escribir...' onChange={handleChange}></textarea>
            <br/>
            <button className='enviar' name='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Crear;