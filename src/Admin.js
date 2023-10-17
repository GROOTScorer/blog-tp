import { useEffect, useState } from 'react';
import './Admin.css';
import Prevista from './Prevista';

function Titulo() {
    useEffect(() => {
      document.title = 'Administrador';
    }, []);
  }

  function handleSubmit(e)
  {
      e.preventDefault();
  }

function handleChange(e)
{
    let password = e.target.value;
    let isPassword;
    if(password === 'abcefg')
    {
        isPassword=true;
    }
}

function Admin()
{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const posts = JSON.parse(localStorage.getItem('posts'));
      if (posts) {
       setPosts(posts);
      }
    }, []);
    
    return(
        <div className='containerAdmin'>
            <Titulo />
            <form onSubmit={handleSubmit}>
                <input className='contrasena' name='contrasena' placeholder='Ingresa la contraseña...' onChange={handleChange}></input>
                <button className='enviarContrasena'>Enviar</button>
            </form>
        {/* {isPassword && posts.map(post => (
        <Prevista id={post.titulo} key={post.titulo} titulo={post.titulo} autor={post.autor} sintesis={post.sintesis} />
        ))} */}

        </div>
    )
}

export default Admin;