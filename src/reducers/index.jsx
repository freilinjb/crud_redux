import  {combineReducers} from 'redux';
//combineReducers: combina todos los reducer en uno solo
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});