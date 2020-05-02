//applyMiddleware para pasar el thunk y lo agrerga como parte del store
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
 
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//CIERTAS FUNCIONES PARA VER LOS STATE
    )//si no se utilizara thunk no se requiere
);

export default store;