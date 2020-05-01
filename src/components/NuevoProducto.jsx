import React from 'react';

const NuevoProducto = () => {
    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center md-4 font-weight-bold">
                           Agregar Nuevo Producto
                       </h2>
                       <form>
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