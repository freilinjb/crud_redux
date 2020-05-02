import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    console.log(producto);
    
    return async (dispatch) => {
        dispatch(agrergarProducto());

        try {
            //Insertar en la API
            await clienteAxios.post('/prodsuctos', producto);

            //Si todo sale bien, actualiza el state
            dispatch(agregarProductoExito(producto));

        } catch (error) {
            console.log(error);

            //Si hay un error cambia el state
            dispatch(agrergarProductoError(true));
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