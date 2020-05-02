import  {combineReducers} from 'redux';
//combineReducers: combina todos los reducer en uno solo
import productosReducer from './productosReducer';

export default combineReducers({
    productos: productosReducer
});