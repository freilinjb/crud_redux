import React from 'react';
import {Link } from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';

const Producto = ({producto}) => {

    const dispatch = useDispatch();
    
    //Confirmar si desa eliminar el producto
    const confirmarEliminarProducto = id => {

        //Preguntar al usuario

        //Pasarlo al action
        dispatch(borrarProductoAction(id));
    }

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
                <button 
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}>Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;