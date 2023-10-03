import { useParams } from 'react-router-dom';
import './Articulo.css';

function Articulo()
{
    let { id } = useParams();
    return(
        <h1>{id}</h1>
    )
}

export default Articulo;