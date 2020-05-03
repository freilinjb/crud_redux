import React,{Fragment, useEffect} from 'react';
import Producto from './Producto';

import {useSelector, useDispatch} from 'react-redux'
import {obtenerProductos} from '../actions/productoActions';

const Productos = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        //Consultar la API
        const cargarProductos = () => dispatch(obtenerProductos());
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    //Obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Lista de Productos</h2>
            
            { error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p> : null }
            { cargando ? <p className="text-center">Cargabdo...</p> : null }
            
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto 
                                key={producto.id} 
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;