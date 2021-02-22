import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {agregarProduct} from '../reducers/productosDuck'
import {useForm} from 'react-hook-form'

const NuevoP = () => {


    const {register,handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const submitNuevo =(producto,e)=>{
        dispatch (agregarProduct(producto))
        e.target.reset()
    }


    
    //cargaup=(producto)=>dispatch (agregarProduct(producto))


    return ( <div className = "row justify-content-center">
        <div className="col-md-8 mt-4">
            <div className = "card">
                <div className = "card-body">
                    <h2 className = "text-center mb-4 font-weight-bold">
                        Agregar Nuevos Productos
                    </h2>
                    <form onSubmit = {handleSubmit(submitNuevo)}>
                        <div className="form-group">
                            <label>
                                Nombre Producto
                            </label>
                            <input
                            className="form-control"
                            placeholder="Nombre producto"
                            name="nombre"
                            defaultValue=""
                            ref={register({required:true})}
                            />
                            {errors.nombre && <span >Es requerido</span>}
                        </div>
                        <div className="form-group">
                            <label>
                                Precio Producto
                            </label>
                            <input
                            type="number"
                            className="form-control"
                            placeholder="Precio"
                            name="precio"
                            defaultValue=""
                            ref={register({required:true})}
                            />
                            {errors.precio && <span className ="mt-8">Es requerido</span>}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div> );
}
 
export default NuevoP;