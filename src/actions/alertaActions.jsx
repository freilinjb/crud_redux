import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

//Muestra una alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(CrearAlerta(alerta));
    }
}

const CrearAlerta =alerta=> ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

//TODO ocultar alerta
export function ocultarAertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta =() => ({
    type: OCULTAR_ALERTA
});