//cada reducer tinene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false//indicador para saber cuando esta cargando
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        default:
            return state;
    }
}
