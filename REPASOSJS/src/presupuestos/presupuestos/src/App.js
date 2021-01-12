import React, { useState } from 'react';
import Formulario from './componentes/Formulario';
import Pregunta from './componentes/Pregunta';

function App() {

  //definir el state
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  const [gastos, setGastos] = useState([])

  //agregar nuevo gasto

  const agregarNuevoGasto = gasto1 => {
    setGastos([
      ...gastos,
      gasto1
    ]);
  }


  return (
    <div className ="container">
      <header >
        <h1>Gasto semanal</h1>
        <div className='contenido-principal contenido'>
        {mostrar?
        (

          <Pregunta
          setPresupuesto = {setPresupuesto}
          setRestante = {setRestante}
          setMostrar = {setMostrar}
          />
        )
        : (

        <div className='row'>
          <div className='one-half column'>
          <Formulario agregarNuevoGasto={agregarNuevoGasto}/>
          </div>
          <div className='one-half column'>
          2
          </div>
        </div>
        )}

        </div>

      </header>
    </div>
  );
}

export default App;
