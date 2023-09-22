import './Prevista.css';

function Prevista(){
    return(
        <div className='prevista'>
            <img className='imgprev' src='https://la35.net/assets/img/binary.png'></img>
            <h3 className='tituloprev'>El Titulo</h3>
            <p className='sintesisprev'>Esta sintesis habla un poco sobre lo que se va a ver en el artículo.</p>
            <p className='autorprev'>Por Groot</p>
            <img height="25px" width="25px" className='like' src='https://cdn-icons-png.flaticon.com/256/833/833472.png'></img>
            <img height="25px" width="25px" className='copylink' src='https://cdn.iconscout.com/icon/free/png-256/free-chain-link-connection-attach-37919.png'></img>

        </div>
    )
}

export default Prevista;