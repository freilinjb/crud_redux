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

