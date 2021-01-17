import React, { useState } from 'react';
import Header from './Componentes/Header';
import styled from '@emotion/styled';
import Fromulario from './Componentes/Formulario';
import Resumen from './Componentes/Resumen';
import Resultado from './Componentes/Resultado';

const Contenedor =styled.div`
  max-width:600px;
  margin: 2rem auto;
  
  `;

  const ContForm = styled.div `
    background-color: #fff;
    padding: 3rem
  `;


function App() {

  const [resumen, setResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:'',
    }


  });
  const {cotizacion, datos}= resumen
  return (
<Contenedor>
  <Header
  titulo='Cotizador'/>
  <ContForm>
    <Fromulario
    
    setResumen={setResumen}/>
    <Resumen
      datos={datos}
    />
    <Resultado
      cotizacion={cotizacion}
    />
  </ContForm>
</Contenedor>
  );
}

export default App;
