import { useEffect } from 'react';
import './Admin.css';

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
    return(
        <div className='containerAdmin'>
            <Titulo />
            <form onSubmit={handleSubmit}>
                <input className='contrasena' name='contrasena' placeholder='Ingresa la contraseña...' onChange={handleChange}></input>
                <button className='enviarContrasena'>Enviar</button>
            </form>
        </div>
    )
}

export default Admin;