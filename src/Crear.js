import './Crear.css';

function handleClick(event){
    event.preventDefault();
}

function Crear()
{
    return(
        <div className="containerCrear">
            <form>
            <input className='titulo' type="titulo" placeholder='Título'></input>
            <textarea className='sintesis' type="sintesis" placeholder='Síntesis del artículo'></textarea>
            <input className='autor' type='autor' placeholder='Creador por...'></input>
            <textarea className='area' placeholder='Comienza a escribir...'></textarea>
            <input type='submit' onClick={handleClick}></input>
            </form>
        </div>
    )
}

export default Crear;