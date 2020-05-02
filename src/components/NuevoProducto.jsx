import React,{useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

//useDiapatch: sirve para mandar a ejecutar las actiones que tengamos
//useSelector: es una forma de acceder al state dentro del componente

//Actions de Redux
import { crearNuevoProductoAction } from  '../actions/productoActions.jsx';
const NuevoProducto = () => {

    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //dispatch se utiliza para mandar a llamar las funciones que esten en el action
    //manda a llamar el action de productoAction
    const agrergarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    //todo cuandl el suario haga submit
    const submitNuevoProducto =e=> {
        e.preventDefault();

        //Validar formulario
        if(nombre.trim() ==='' && precio <= 0){
            return;
        }

        //Si no hay errores

        //Enviar al action
        agrergarProducto({
            nombre,
            precio
        });

    }
    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center md-4 font-weight-bold">
                           Agregar Nuevo Producto
                       </h2>
                       <form
                        onSubmit={submitNuevoProducto}
                       >
                           <div className="form-group">
                                <label htmlFor="producto">Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre del Producto"
                                    name="nombre"
                                    valu={nombre}
                                    onChange={e=>guardarNombre(e.target.value)}
                                    />
                           </div>
                           <div className="form-group">
                                <label htmlFor="producto">Precio del Prod ucto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio del Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e=>guardarPrecio(Number(e.target.value))}
                                    />
                           </div>
                           <button type="submit" className="btn btn-primary btn-block font-weight w-100">AGREGAR</button>
                       </form>
                   </div>
               </div>
           </div>
       </div>
     );
}
 
export default NuevoProducto;