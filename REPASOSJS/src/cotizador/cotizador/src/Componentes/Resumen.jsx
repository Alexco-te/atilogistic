import styled from '@emotion/styled';
import React from 'react';
import { priMayus } from '../Helpers/helper';

const ResumenS = styled.div`
    padding:1rem;
    text-align:center;
    background-color: #00838f;
    color:#fff;
    margin-top:1rem;
`;
const Resumen = ({datos}) => {

    const {marca,year,plan}=datos

    if(marca=== '' || year === '' || plan === '') return null;
    return ( <ResumenS>
        <h2>
        Resumen de cotizacion
        </h2>
        <ul>
            <li>
                Marca: {priMayus(marca)}
            </li>
            <li>
                Plan: {priMayus(plan)}
            </li>
            <li>
                Año del auto: {year}
            </li>
        </ul>
    </ResumenS>
    );
}
 
export default Resumen;