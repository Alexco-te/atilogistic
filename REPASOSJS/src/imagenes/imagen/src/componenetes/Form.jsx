import React, { useState } from 'react';
import Error from './Error';

const Form = ({setBusqueda}) => {

    const [clave, setClave] = useState('');
    const [error, setError] = useState(false)

    const buscImag = e =>{
        e.preventDefault();

        if(clave.trim()===''){
            setError(true);
            return;
        }
        setError(false)

        setBusqueda(clave)

    }
    return ( <form
        onSubmit={buscImag}
    >
        <div className = "row" >
            <div className = "form-group col-md-8" >
                <input
                type='text'
                className='form-control form-control-lg'
                placeholder = 'buscar imagen, ejemplo: futbol o cafe'
                onChange={e=> setClave(e.target.value)}
                />

            </div>
            <div className = "form-group col-md-4" >
                <input
                type='submit'
                className='btn btn-lg btn-danger btn-block'
                value='Buscar'
                />

            </div>
        </div>

        {error? <Error mensaje = 'se solicita terminos'/>:null}
    </form> );
}
 
export default Form;