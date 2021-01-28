import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
 import imagen from './pngegg.png'
import Form from './componentes/Form';
import axios from 'axios';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';
const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    column-gap:2rem
  }
`;

const Imagen = styled.img `
max-width:100%;
margin-top:5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas neue', cursive;
  color:#fff;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

  &::after{
    content:'';
    width:100px;
    height:6px;
    background-color: #66a2fe;
    display:block;
    
  }
`;

function App() {


  const [monedas, setMonedas] = useState('')
  const [criptoMonedas, setCriptoMonedas] = useState('')
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {

    const calcCripto =async() => {
      
      if( monedas === '') return;
    
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=${criptoMonedas},${monedas}`
      const resultado = await axios.get(url);
      setCargando(true);
      setTimeout(() => {

        setCargando(false)
        setResultado (resultado.data.DISPLAY[criptoMonedas][monedas])
      }, 3000);

    }
    calcCripto ();

  }, [monedas,criptoMonedas])

  const componente = (cargando)? <Spinner/>: <Resultado resultado ={resultado}/>

  return (
    <Contenedor>
      <div>
        <Imagen

        src={imagen}
        alt='imagen cripto'
        >
        </Imagen>
      </div>
      <div>
        <Heading>
          Cripto Cop al instante mejor q nunca siempre para toda la vida
        </Heading>
        <Form
        setMonedas={setMonedas}
        setCriptoMonedas={setCriptoMonedas}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
