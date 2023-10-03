import './Prevista.css';

function Prevista(props){
    return(
        <div>
        <div className='prevista' key={props.title}>
            <img alt="" className='imgprev' src='https://la35.net/assets/img/binary.png'></img>
            <h3 className='tituloprev'>{props.title}</h3>
            <p className='sintesisprev'>{props.summary}</p>
            <p className='autorprev'>{props.author}</p>
            <img alt="" height="25px" width="25px" className='like' src='https://cdn-icons-png.flaticon.com/256/833/833472.png'></img>
            <img alt="" height="25px" width="25px" className='comentario' src='https://upload.wikimedia.org/wikipedia/commons/5/50/Twitter_Reply.png'></img>
        </div>

        </div>
    )
}

export default Prevista;