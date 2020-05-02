import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR
} from '../types';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    console.log(producto);
    
    return (dispatch) => {
        dispatch(agrergarProducto());

        try {
            dispatch(agregarProductoExito(producto));
        } catch (error) {
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
const agrergarProductoError = () => {

}