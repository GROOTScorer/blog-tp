import { useEffect } from 'react';
import './Admin.css';

function Titulo() {
    useEffect(() => {
      document.title = 'Administrador';
    }, []);
  }

function Admin()
{
    return(
        <div>
            <Titulo />
        </div>
    )
}

export default Admin;