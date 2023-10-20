import './Prevista.css';
import { Link } from "react-router-dom";
import Like from './Like';

function Prevista(props) {
    function eliminarPost(id) {
        const posts = JSON.parse(localStorage.getItem('posts'));
        const filtrado = posts.filter(post => post.titulo !== id);
        localStorage.setItem('posts', JSON.stringify(filtrado));
        props.updateFunction(filtrado);
        if(localStorage.getItem('comentarios')){
            const comentarios = JSON.parse(localStorage.getItem('comentarios'));
            const filtradoComentarios = comentarios.filter(comentario => comentario.titulopost !== id);
            localStorage.setItem('comentarios', JSON.stringify(filtradoComentarios));            
        }

        if(localStorage.getItem('comentarios')){
            const comentarios = JSON.parse(localStorage.getItem('comentarios'));
            const filtradoComentarios = comentarios.filter(comentario => comentario.titulopost !== id);
            localStorage.setItem('comentarios', JSON.stringify(filtradoComentarios));            
        }

        
        const likesData = JSON.parse(localStorage.getItem('likesData')) || {};        
        if (likesData[id] !== undefined) {
            delete likesData[id];
            localStorage.setItem('likesData', JSON.stringify(likesData));
        }
    }

    return(
        <div>
            <div className='prevista' key={props.titulo}>
                <Link to={'/posts/' + props.id}>
                    <img alt="" className='imgprev' src={props.foto}></img>
                    <h3 className='tituloprev'>{props.titulo}</h3>
                    <p className='sintesisprev'>{props.sintesis}</p>
                    <p className='autorprev'>{props.autor}</p>
                </Link>
                <Like postId={props.id} />
                <Link to={'/posts/' + props.id + '#Comentarios'}>
                    <img alt="" height="25px" width="25px" className='comentario' src='https://upload.wikimedia.org/wikipedia/commons/5/50/Twitter_Reply.png'></img>
                </Link>
                {props.admin && (
                <>
                    <br/>
                    <br/>
                    <button className='eliminar' onClick={() => eliminarPost(props.id)}>Eliminar post</button>
                </>
                )}
            </div>
        </div>
    )
}

export default Prevista;