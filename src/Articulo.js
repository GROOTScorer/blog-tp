import { useParams } from 'react-router-dom';
import './Articulo.css';
import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';

function Articulo(props) {
  const [body, setBody] = useState([]);
  const [titulo, setTitulo] = useState('');

  const { id } = useParams();

  useEffect(() => {
    document.title = id;
    setTitulo(id);
  }, [id]);

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem('posts'));
    if (json) {
      const filteredBody = json
        .filter(item => item.titulo === titulo)
        .map(item => item.area);

      setBody(filteredBody);
    }
  }, [titulo]);

  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const storedComentarios = localStorage.getItem('comentarios');
    if (storedComentarios) {
      const comentariosJSON = JSON.parse(storedComentarios);
      const comentariosFiltrados = comentariosJSON
      .filter(item => item.titulopost === id)
      .map(item => ({
        autorComentario: item.autorComentario,
        areaComentario: item.areaComentario,
      }));

      setComentarios(comentariosFiltrados);
    }
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    saveComentario();
    document.f.reset();
  }

  const saveComentario = () => {
    const autorComentario = document.f.autorComentario.value;
    const areaComentario = document.f.areaComentario.value;
    const storedComentarios = localStorage.getItem('comentarios')
      ? JSON.parse(localStorage.getItem('comentarios'))
      : [];

    const updatedComentario = {
      autorComentario: autorComentario,
      areaComentario: areaComentario,
      titulopost: titulo,
    };

    storedComentarios.push(updatedComentario);
    
    localStorage.setItem('comentarios', JSON.stringify(storedComentarios));
    setComentarios([...comentarios, updatedComentario]);
  }

  const eliminarComentario = (id) =>{
    if(localStorage.getItem('comentarios')){
      const comentarios = JSON.parse(localStorage.getItem('comentarios'));
      const filtradoComentarios = comentarios.filter(comentario => comentario.areaComentario !== id);
      localStorage.setItem('comentarios', JSON.stringify(filtradoComentarios)); 
      setComentarios(filtradoComentarios);           
    }
  }

  return (
    <div className='articulo'>
      <h1>{id}</h1>
      <Markdown>
        {body[0]}
      </Markdown>
      <hr />
      <a href='#Comentarios'>
        <h2 id='Comentarios'>Comentarios</h2>
      </a>

      {comentarios.map((comentario, index) => (
        <div className='Comentario' key={index}>
          <p className='autorCom'><b>{comentario.autorComentario}:</b></p>
          <p className='areaCom'><Markdown>{comentario.areaComentario}</Markdown></p>
          {props.admin && (
          <button className='eliminar' onClick={() => eliminarComentario(comentario.areaComentario)}>Borrar Comentario</button>
          )}

        </div>
      ))}

      <form className='crearComentario' onSubmit={handleSubmit} name="f">
        <input className='autorComentario' name='autorComentario' placeholder='Comentador' />
        <textarea className='areaComentario' name='areaComentario' placeholder='Comienza a escribir...'></textarea>
        <button className='enviar' type='submit'>Enviar comentario</button>
      </form>
    </div>
  );
}

export default Articulo;