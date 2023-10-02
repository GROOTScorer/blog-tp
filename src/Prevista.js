import './Prevista.css';

function Prevista(){
    return(
        <div className='prevista'>
            <img alt="" className='imgprev' src='https://la35.net/assets/img/binary.png'></img>
            <h3 className='tituloprev'>El Titulo</h3>
            <p className='sintesisprev'>Esta sintesis habla un poco sobre lo que se va a ver en el artículo.</p>
            <p className='autorprev'>Por Groot</p>
            <img alt="" height="25px" width="25px" className='like' src='https://cdn-icons-png.flaticon.com/256/833/833472.png'></img>
            <img alt="" height="25px" width="25px" className='comentario' src='https://upload.wikimedia.org/wikipedia/commons/5/50/Twitter_Reply.png'></img>

        </div>
    )
}

export default Prevista;