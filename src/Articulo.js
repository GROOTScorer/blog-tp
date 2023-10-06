import { useParams } from 'react-router-dom';
import './Articulo.css';
import { useEffect, useState } from 'react';

function Articulo() {
  const [body, setBody] = useState([]);
  const [titulo, setTitulo] = useState('');

  let { id } = useParams();

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
  const [comentario, setComentario] = useState({
      autorComentario: '',
      areaComentario: '',
  });

  useEffect(() => {
    const storedComentarios = localStorage.getItem('comentarios');
    if (storedComentarios) {
      setComentarios(JSON.parse(storedComentarios));
    }
  }, []);

  function handleSubmit(e)
  {
      e.preventDefault();
      saveComentario();
      setComentario({
          autorComentario: '',
          areaComentario: '',
      })
  }

  function handleChange(e)
  {
      let name = e.target.name;
      let value = e.target.value;
      setComentario({... comentario, [name]: value});
  }

  const saveComentario = () => {
    const storedComentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    const updatedComentarios = [comentario, ...storedComentarios];
    localStorage.setItem('comentarios', JSON.stringify(updatedComentarios));
  }

  return (
    <div className='articulo'>
      <h1>{id}</h1>
      {body.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <hr />
      <h2>Comentarios</h2>

      <form className='crearComentario' onSubmit={handleSubmit}>
        <input className='autorComentario' name='autorComentario' placeholder='Comentador' value={comentario.autorComentario} onChange={handleChange}></input>
        <textarea className='areaComentario' name='areaComentario' placeholder='Comienza a escribir...' value={comentario.areaComentario} onChange={handleChange}></textarea>
        <button className='enviar' name='submit'>Enviar comentario</button>
      </form>
    </div>
  );
}

export default Articulo;
