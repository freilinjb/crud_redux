import React from 'react';
import {Link } from 'react-router-dom';

const Producto = ({producto}) => {
    const  { nombre, precio, id } = producto;
    return ( 
        <tr>
            <td>{nombre}</td>
            <td className="font-weight-bold">{precio}</td>
            <td className="acciones">
                <Link to={`/producto/editar/${id}`} 
                    className="btn btn-primary mr-2">
                        Editar
                </Link>
                <button className="btn btn-danger">Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;