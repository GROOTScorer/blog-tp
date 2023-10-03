import React, { useState, useEffect, useRef } from 'react';
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
  
    const titleRef = useRef();
    const summaryRef = useRef();
    const authorRef = useRef();
  
    useEffect(() => {
      const storedPosts = localStorage.getItem('posts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    }, []);
  
    const savePost = () => {
      const title = titleRef.current.value;
      const summary = summaryRef.current.value;
      const author = authorRef.current.value;
  
      const newPost = {
        title,
        summary,
        author
      };
  
      setPosts([...posts, newPost]);
      localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
      
      titleRef.current.value = '';
      summaryRef.current.value = '';
      authorRef.current.value = '';
    }

    return(
        <div className="containerCrear">
            <Titulo />
            <form>
            <input ref={titleRef} className='titulo' type="titulo" placeholder='Título'></input>
            <textarea ref={summaryRef} className='sintesis' type="sintesis" placeholder='Síntesis del artículo'></textarea>
            <input ref={authorRef} className='autor' type='autor' placeholder='Creador por...'></input>
            <textarea className='area' placeholder='Comienza a escribir...'></textarea>
            <br/>
            <input className='enviar' type='submit' onClick={savePost}></input>
            </form>
        </div>
    )
}

export default Crear;