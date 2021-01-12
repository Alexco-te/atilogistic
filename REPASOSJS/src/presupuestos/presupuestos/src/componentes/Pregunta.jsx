import React, { Fragment, useState } from 'react';
import Error from './Error';


const Pregunta = ({setRestante, setPresupuesto, setMostrar }) => {

    //definir el state 

    const [cantidad, setCantidad] = useState(0);
    const [error, setEroor] = useState(false);

    // funcion definir presupuesto

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10))
    }
    //submit para definir presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault ();

        if(cantidad < 1 || isNaN ( cantidad )){
            setEroor(true);
            return;
        }

        setEroor(false);
        setPresupuesto (cantidad);
        setRestante (cantidad);
        setMostrar (false) 
        }



    return (  
        <Fragment>
            <h2>
                coloca tu presupuesto
            </h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> :null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number"
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={definirPresupuesto}
                />
                <input
                type= 'submit'
                className = 'button-primary u-full-width'
                value = 'Definir presupuesto'
                />
                
            </form>
        </Fragment>
    );
}
 
export default Pregunta;