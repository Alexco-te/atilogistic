import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'

const Formulario = ({setGasto1,setCrear}) => {

    const [gasto, setGasto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto =e=> {
        e.preventDefault();

        //Validar
        if(cantidad<1 || isNaN (cantidad) || gasto.trim()===''){
            setError(true);
            return;
        }
        setError(false)
        //Construir el gasto
        const gasto1 ={
            gasto,
            cantidad,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal
        setGasto1(gasto1)
        setCrear(true);

        //resetear el form
        setGasto('')
        setCantidad(0)

    }

    return ( <form
        onSubmit={agregarGasto}
    >
        
        <h2>
            Agregar tus gastos aqui
        </h2>
        {error ? <Error mensaje ="ambos campos son obligatorios o presupuesto incorrecto"/> :null}
        <div className = 'campo'>
            <label>
                Nombre Gasto
            </label>
            <input
            type='text'
            className ='u-full-width'
            placeholder = 'Ej. Transporte'
            value = {gasto}
            onChange ={e => setGasto(e.target.value)}
            />
        </div>
        <div className = 'campo'>
            <label>
                Cantidad Gasto
            </label>
            <input
            type='number'
            className ='u-full-width'
            placeholder = 'ej. 300'
            value = {cantidad}
            onChange ={
                e => setCantidad(e.target.value)}
            />
            
        </div>
        <input
        type="submit"
        className='button-primary u-full-width'
        placeholder='gasto'>
        </input>
    </form> );
}
 
Formulario.propTypes = {
    setGasto1: PropTypes.func.isRequired,
    setCrear: PropTypes.func.isRequired
}
export default Formulario;