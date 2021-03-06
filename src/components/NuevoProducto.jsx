import React,{useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

//useDiapatch: sirve para mandar a ejecutar las actiones que tengamos
//useSelector: es una forma de acceder al state dentro del componente y se usa para leer lo que hay en el state


//Actions de Redux
import { crearNuevoProductoAction } from  '../actions/productoActions.jsx';
import { mostrarAlerta, ocultarAertaAction } from '../actions/alertaActions';

const NuevoProducto = ({history}) => {

    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando = useSelector( state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    //dispatch se utiliza para mandar a llamar las funciones que esten en el action
    //manda a llamar el action de productoAction
    const agrergarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    //todo cuandl el suario haga submit
    const submitNuevoProducto =e=> {
        e.preventDefault();

        //Validar formulario
        if(nombre.trim() ==='' && precio <= 0){

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppsercase p-3'
            }

            dispatch(mostrarAlerta(alerta));

            return;
        }

        //Si no hay errores
        dispatch(ocultarAertaAction());

        //Enviar al action
        agrergarProducto({
            nombre,
            precio
        });
        //redireccionar al componente principal
        history.push('/');

    }
    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center md-4 font-weight-bold">
                           Agregar Nuevo Producto
                       </h2>

                        { alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null }

                       <form 
                            className="needs-validation"
                            noValidate
                            onSubmit={submitNuevoProducto}
                       >
                           <div className="form-group">
                                <label htmlFor="producto">Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre del Producto"
                                    name="nombre"
                                    id="nombre"
                                    valu={nombre}
                                    onChange={e=>guardarNombre(e.target.value)}
                                    required
                                    />
                                <div className="valid-feedback">Looks good!</div>

                           </div>
                           <div className="form-group">
                                <label htmlFor="precio">Precio del Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio del Producto"
                                    name="precio"
                                    id="precio"
                                    value={precio}
                                    onChange={e=>guardarPrecio(Number(e.target.value))}
                                    required
                                    />
                                <div className="valid-feedback">Looks good!</div>
                                
                           </div>
                           <button type="submit" className="btn btn-primary btn-block font-weight w-100">AGREGAR</button>
                       </form>
                       { cargando ? <p> Cargando... </p> : null}
                       { error ? <p className="alert alert-danger p2 mt-4 text-center"> Hubo un error </p> : null}
                   </div>
               </div>
           </div>
       </div>
     );
}
 
export default NuevoProducto;