import { Link } from "react-router-dom";
import './Navegador.css';

function Navegador()
{
    return(
        <div className="Nav">
            <nav>
             <Link to='/'>AssemBlog</Link>
             <ul>
                <Link to='/Crear'><li className="crear">Crear un artículo</li></Link>

                <input></input>
             </ul>
            </nav>
        </div>
    )
}

export default Navegador;