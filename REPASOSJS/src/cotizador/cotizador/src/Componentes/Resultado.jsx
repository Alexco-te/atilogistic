import styled from '@emotion/styled';
import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const TesxP = styled.p`
    color: #00838f;
    padding:1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin:0;

`
const ResultCo =styled.div`
    text-align:center;
    padding:3rem;
    border:1px solid #26c6da;
    background-color:rgb(127,224,237);
    margin-top:1rem;
    position:relative
`

const Resultado = ({cotizacion}) => {
    return (
        
        (cotizacion === 0)?<Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        :(<ResultCo>
            
            <TransitionGroup
            component="span"
            className = 'resultado'>
                <CSSTransition
                classNames='resultado'
                key={cotizacion}
                timeout={{enter:500, exit: 500}}
                >
                 <TesxP>
                  <span>El total es: $ {cotizacion}
                 </span>
                 </TesxP>
                </CSSTransition>
            </TransitionGroup>
            
            </ResultCo>


        )
    );
}
 
export default Resultado;