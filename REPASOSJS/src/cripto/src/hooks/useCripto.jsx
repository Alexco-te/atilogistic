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

const useCripto = (label, stateInicial, opciones) => {

    const [actualizar, setActualizar] = useState(stateInicial)

    const SelecCripto =()=>(
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
                <option key ={opcion.CoinInfo.Id} value ={
                    opcion.CoinInfo.Name}>
                    {opcion.CoinInfo.FullName}
                </option>
                ))}
            </Select>

        </Fragment>

    )

    return [actualizar, SelecCripto, setActualizar]
    
}
 
export default useCripto;

