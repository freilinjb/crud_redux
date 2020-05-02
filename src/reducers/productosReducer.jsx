//cada reducer tinene su propio state
import {
    AGRERGAR_PRODUCTO,
    AGRERGAR_PRODUCTO_EXITO,
    AGRERGAR_PRODUCTO_ERROR
} from '../types';

const initialState = {
    productos: [],
    error: null,
    loading: false//indicador para saber cuando esta cargando
}

export default function(state = initialState, action) {
    switch(action.type) {
        case AGRERGAR_PRODUCTO:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
