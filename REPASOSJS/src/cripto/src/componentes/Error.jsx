import styled from '@emotion/styled';
import React from 'react';

const FormtMensaje = styled.p`
    background-color: #b7322c;
    padding:1rem;
    color:#fff;
    font-size:30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas neue', cursive
`

const Error = ({mensaje}) => {
    return ( <FormtMensaje>
        {mensaje}
    </FormtMensaje> );
}
 
export default Error;