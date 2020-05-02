//applyMiddleware para pasar el thunk y lo agrerga como parte del store
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
 
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        //Esta configuracion evita que de error al no tener la extension
        //redux devtools
        typeof windows === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__!== 'undefined' ?  
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        //CIERTAS FUNCIONES PARA VER LOS STATE
        //si no se utilizara thunk no se requiere
    )
);

export default store;