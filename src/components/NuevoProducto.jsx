import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

//useDiapatch: sirve para mandar a ejecutar las actiones que tengamos
//useSelector: es una forma de acceder al state dentro del componente

//Actions de Redux
import { crearNuevoProductoAction } from  '../actions/productoActions.jsx';
const NuevoProducto = () => {

    //Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //dispatch se utiliza para mandar a llamar las funciones que esten en el action
    //manda a llamar el action de productoAction
    const agrergarProducto = () => dispatch(crearNuevoProductoAction());

    //todo cuandl el suario haga submit
    const submitNuevoProducto =e=> {
        e.preventDefault();

        //Validar formulario

        //Si no hay errores

        //Enviar al action
        agrergarProducto();

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
                                    />
                           </div>
                           <div className="form-group">
                                <label htmlFor="producto">Precio del Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio del Producto"
                                    name="precio"
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