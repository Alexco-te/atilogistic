import React from 'react';
import styled from '@emotion/styled'

const HeaderPropio = styled.header `
    background-color: #26c6da;
    padding: 10px;
    font-weight:bold;
    color:#FFFFFF;
`; 

const H1propio = styled.h1 `
    font-size : 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( <HeaderPropio>
        <H1propio>{titulo}</H1propio>
    </HeaderPropio> );
}
 
export default Header;