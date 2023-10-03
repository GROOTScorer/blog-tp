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
                <Link to='/Admin'><li className="admin">Administrador</li></Link>

                <input placeholder="Buscar..."></input>
                <a href="https://github.com/GROOTScorer/blog-tp"><img alt="" className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
             </ul>
            </nav>
        </div>
    )
}

export default Navegador;