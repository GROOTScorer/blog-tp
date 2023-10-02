import { useEffect } from 'react';
import './Crear.css';

function Titulo() {
    useEffect(() => {
      document.title = 'Crear un post';
    }, []);
  }

function handleClick(event){
    event.preventDefault();
    //localStorage.setItem('posts', JSON.stringify(posts));
}

function Crear()
{
    return(
        <div className="containerCrear">
            <Titulo />
            <form>
            <input className='titulo' type="titulo" placeholder='Título'></input>
            <textarea className='sintesis' type="sintesis" placeholder='Síntesis del artículo'></textarea>
            <input className='autor' type='autor' placeholder='Creador por...'></input>
            <textarea className='area' placeholder='Comienza a escribir...'></textarea>
            <br/>
            <input className='enviar' type='submit' onClick={handleClick}></input>
            </form>
        </div>
    )
}

export default Crear;