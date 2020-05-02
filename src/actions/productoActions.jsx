import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR
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
            await clienteAxios.post('/producstos', producto);

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
})