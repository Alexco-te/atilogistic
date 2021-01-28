import styled from '@emotion/styled';
import React from 'react';

const ResultadoDiv = styled.div`
    color:#fff;
    font-family:Arial,Arial, Helvetica, sans-serif;
`
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight:bold
    }

`
const Inf = styled.p`
    font-size: 18 px;
    span{
        font-weight:bold
    }
`

const Resultado = ({resultado}) => {
    if(Object.keys(resultado).length===0)return null;

    return ( 
        <ResultadoDiv>
            <Precio>EL precio es <span>{resultado.PRICE}</span></Precio>
            <Inf>EL precio mas alto <span>{resultado.HIGHDAY}</span></Inf>
            <Inf>EL precio mas bajo <span>{resultado.LOWDAY}</span></Inf>
            <Inf>EL precio variacion ultimas 24 horas <span>{resultado.CHANGECT24HOUR}</span></Inf>
            <Inf>Ultima actualizacion <span>{resultado.LASTUPDATE}</span></Inf>
        </ResultadoDiv>    
     );
}
 
export default Resultado;