import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGAR_PRODUCTOS,
    COMENZAR_DESCARGAR_EXITO,
    COMENZAR_DESCARGAR_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    console.log(producto);
    
    return async (dispatch) => {
        dispatch(agrergarProducto());

        try {
            //Insertar en la API
            await clienteAxios.post('/productos', producto);

            //Si todo sale bien, actualiza el state
            dispatch(agregarProductoExito(producto));

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            console.log(error);

            //Si hay un error cambia el state
            dispatch(agrergarProductoError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error!!',
                text: 'Hubo un error, Intentelo de nuevo!'
                // footer: '<a href>Why do I have this issue?</a>'
              });
        }
    }
}

const agrergarProducto = () => ({
    type: AGRERGAR_PRODUCTO,
    payload: true
});

//Si el producto se guarba en la base de datos
const agregarProductoExito = producto => ({
    type: AGRERGAR_PRODUCTO_EXITO,
    payload: producto
});

//Si hubo un error
const agrergarProductoError = (estado) => ({
    type: AGRERGAR_PRODUCTO_ERROR,
    payload: estado
});

//TODO Funcion que descarga los productos de la BD
export function obtenerProductos() {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(agrergarProductosExitosa(respuesta.data));

        } catch (error) {
            dispatch(descargarProductosError());
            console.log(error);
        }
    }
}

const descargarProductos = () =>({
    type:COMENZAR_DESCARGAR_PRODUCTOS,
    payload: true
});

const agrergarProductosExitosa = productos => ({
    type: COMENZAR_DESCARGAR_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: COMENZAR_DESCARGAR_ERROR,
    payload: true
});

//Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());

            //Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'EL PRODUCTO se ha eliminado correctamente.',
                'success'
              );

        } catch (error) {
            dispatch(eliminarProductoError());
            console.log(error);
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito=() => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

//Colocar producto en edicion
export function obtenerProductoEditar(producto) {    
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto));
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});  

//Editar un registro en la api y state
export function editarProductoAction (producto) {
    return async (dispatch) => {
        dispatch(editarProducto());
        
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);            
            dispatch(editarProductoExito(producto));
        } catch (error) {
            
        }
    }
}

const editarProducto =()=> ({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
});