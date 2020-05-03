import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {editarProductoAction} from '../actions/productoActions';

const EditarProducto = () => {

    //nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
     })

    //Producto a editar
    const productoEditar = useSelector(state => state.productos.productoeditar);

    //llenar el state automaticamente
    //no puede haber useEffect debajo de un return
    useEffect(() => {
        guardarProducto(productoEditar);
    },[]);
     
    const onChangeFormulario =e=> {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        });
    }

    const {nombre, precio, id} = producto;

    const submiteditarProducto =e=> {
        e.preventDefault();

        editarProductoAction();
    }
    
    return ( 
        <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center md-4 font-weight-bold">
                           Editar Producto
                       </h2>
                       <form 
                            onSubmit={submiteditarProducto}
                       >
                           <div className="form-group">
                                <label htmlFor="producto">Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre del Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
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
                                    onChange={onChangeFormulario}
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