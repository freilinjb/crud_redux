import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR
} from '../types';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return () => {
        console.log(producto);
    }
}