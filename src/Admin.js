import { useEffect, useState } from 'react';
import './Admin.css';

function Titulo() {
    useEffect(() => {
      document.title = 'Administrador';
    }, []);
  }

  function Admin(props)
  {   
      const {setAdmin} = props;
      const [posts, setPosts] = useState([]);
      const [password, setPassword] = useState('');

      function handleChange(e)
      {
        setPassword(e.target.value);
      }

      function handleSubmit(e)
      {
          e.preventDefault();
                if(password === 'abcdefg')
                {
                    setAdmin(true);
                }
        
        setPassword('');
      }
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
                <input className='contrasena' name='contrasena' placeholder='Ingresa la contraseña...' value={password} onChange={handleChange}></input>
                <button className='enviarContrasena'>Enviar</button>
            </form>

        </div>
    )
}

export default Admin;