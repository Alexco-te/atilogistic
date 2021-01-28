import styled from '@emotion/styled';
import React, { Fragment, useState } from 'react';

const Label =styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.4rem;
    margin-top: 2rem;
    display:block
`;

const Select = styled.select `
    width: 100%;
    display:block;
    padding:1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border:none;
    font-size:1.2rem
`;

const useMoneda = (label, stateInicial, opciones) => {

    const [actualizar, setActualizar] = useState(stateInicial)

    const Seleccionar =()=>(
        <Fragment>
            <Label>
                {label}
            </Label>
            <Select onChange ={e => setActualizar (e.target.value)}
                value={actualizar}
            >
                <option
                    value="">- Seleccione -
                </option>
                {opciones.map(opcion =>(
                <option key ={opcion.codigo} value ={
                    opcion.codigo}>
                    {opcion.nombre}
                </option>
                ))}
            </Select>

        </Fragment>

    )

    return [actualizar, Seleccionar, setActualizar]
    
}
 
export default useMoneda;

