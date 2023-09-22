import './Crear.css';

function Crear()
{
    return(
        <div className="container">
            <input className='titulo' type="titulo"></input>
            <input className='sintesis' type="sintesis"></input>
            <input className='autor' type='autor'></input>
            <textarea className='area'></textarea>
        </div>
    )
}

export default Crear;