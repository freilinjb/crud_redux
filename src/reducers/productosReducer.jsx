//cada reducer tinene su propio state
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
    PRODUCTO_EDITADO_ERROR
} from '../types';

const initialState = {
    productos: [],
    error: null,
    loading: false,//indicador para saber cuando esta cargando
    productoeliminar: null,
    productoeditar: null
}

export default function(state = initialState, action) {
    switch(action.type) {

        case COMENZAR_DESCARGAR_PRODUCTOS:
        case AGRERGAR_PRODUCTO:
            return{
                ...state,
                loading: action.payload
            }
        case AGRERGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,//Cuando ya se confirmo que se guardo cambia el valor
                productos: [...state.productos, action.payload]
            }
        case PRODUCTO_ELIMINADO_ERROR:
        case COMENZAR_DESCARGAR_ERROR:
        case AGRERGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case COMENZAR_DESCARGAR_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoeliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }
        case OBTENER_PRODUCTO_EDITAR: 
            return{
                ...state,
                productoeditar: action.payload
            }

        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productoeditar: null,
                productos: state.productos.map(producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto)
            }
        default:
            return state;
    }
}
