//cada reducer tinene su propio state
import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGAR_PRODUCTOS,
    COMENZAR_DESCARGAR_EXITO,
    COMENZAR_DESCARGAR_ERROR
} from '../types';

const initialState = {
    productos: [],
    error: null,
    loading: false//indicador para saber cuando esta cargando
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

        case AGRERGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}
