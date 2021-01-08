import React, { Fragment, useState } from 'react'
import uuid from 'uuid/dist/v4';

const Formulario = ({crearCitas}) => {
    // crear state de citas

    const [cita, setCita ]= useState ({
        mascota:'',
        propetario:'',
        fecha:'',
        hora:'',
        sintomar:''
    })

    const [error, setError] = useState(false)
    // cada que escribi 
    const actualizarEstado= e =>{
        setCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }
    //  Extraer los valores 
    const {mascota,propetario,fecha,hora,sintomar} = cita
    
    // presionar boton

     const sumitCita = e => {
         e.preventDefault();

         console.log(mascota);
         
         //  validar
         if(mascota.trim() === '' || propetario.trim() === '' || fecha.trim() === '' || 
         hora.trim() === '' || sintomar.trim() === ''){
             setError(true);
             return;
            }
        
        // Eliminar mensaje previo    
            setError(false);
        
        // asiganar id
            cita.id =uuid()

        // crewar cita

        crearCitas(cita)

        //Borrar cita
        setCita({
            mascota:'',
        propetario:'',
        fecha:'',
        hora:'',
        sintomar:''
        })            
        }
    
    return (  
        <Fragment>
            <h2>
                Crear cita
            </h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
            <form onSubmit={sumitCita}>
                <label>
                    Nombre mascota
                </label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder = 'Nombre mascota'
                    onChange = {actualizarEstado}
                    value={mascota}
                />
                <label>
                    Nombre propietario
                </label>
                <input
                    type='text'
                    name='propetario'
                    className='u-full-width'
                    placeholder = 'Nombre propietario'
                    onChange = {actualizarEstado}
                    value={propetario}
                />
                <label>
                    Fecha de alta
                </label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange = {actualizarEstado}
                    value={fecha}
                />
                <label>
                    Hora
                </label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange = {actualizarEstado}
                    value={hora}
                />
                <label>
                    sintomas
                </label>
                <textarea
                className="u-full-width"
                name='sintomar'
                onChange = {actualizarEstado}
                value={sintomar}
                />
                <button 
                    type='submit'
                    className="u-full-width button-primary"
                >
                    agregar cita    
                </button>

            </form>
        </Fragment>
    );
}
 
export default Formulario;