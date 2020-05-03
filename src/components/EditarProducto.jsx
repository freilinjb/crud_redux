import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

const EditarProducto = () => {

    //Producto a editar
    const producto = useSelector(state => state.productos.productoeditar);
    const {nombre, precio, id} = producto;
    console.log(producto);
    
    
    return ( 
        <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center md-4 font-weight-bold">
                           Editar Producto
                       </h2>
                       <form>
                           <div className="form-group">
                                <label htmlFor="producto">Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre del Producto"
                                    name="nombre"
                                    value={nombre}
                                    />
                           </div>
                           <div className="form-group">
                                <label htmlFor="producto">Precio del Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio del Producto"
                                    name="precio"
                                    value={Number(precio)}
                                    />
                           </div>
                           <button type="submit" 
                                className="btn btn-primary btn-block font-weight w-100">GUARDAR CAMBIOS</button>
                       </form>
                   </div>
               </div>
           </div>
       </div>
     );
}
 
export default EditarProducto;