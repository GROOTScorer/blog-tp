import './Prevista.css';
import { Link } from "react-router-dom";

function Prevista(props){
    return(
        <div>
        <div className='prevista' key={props.titulo}>
            <Link to={'/posts/' + props.id}>
                <img alt="" className='imgprev' src='https://la35.net/assets/img/binary.png'></img>
                <h3 className='tituloprev'>{props.titulo}</h3>
                <p className='sintesisprev'>{props.sintesis}</p>
                <p className='autorprev'>{props.autor}</p>
            </Link>
            <img alt="" height="25px" width="25px" className='like' src='https://cdn-icons-png.flaticon.com/256/833/833472.png'></img>
            <Link to={'/posts/' + props.id + '#Comentarios'}><img alt="" height="25px" width="25px" className='comentario' src='https://upload.wikimedia.org/wikipedia/commons/5/50/Twitter_Reply.png'></img></Link>
            {props.admin && (
            <>
                <br/>
                <br/>
                <button className='eliminar'>Eliminar post</button>
            </>
        )}
        </div>

        </div>
    )
}

export default Prevista;