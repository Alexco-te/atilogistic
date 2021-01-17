import React, { useEffect, useState } from 'react';
import Control from './componentes/Control';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
import Pregunta from './componentes/Pregunta';

function App() {

  //definir el state
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrar, setMostrar] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto1, setGasto1] = useState({})
  const [crear, setCrear] = useState(false)

  //actualizar el restante

  useEffect(() => {
    if(crear){
      // agregar el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto1
      ]);

      //restar el presupuesto actual

      const presuRest = restante - gasto1.cantidad
      setRestante(presuRest);

      setCrear(false)

    }
    
  }, [gasto1,crear,gastos,restante])

  //agregar nuevo gasto



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
          <Formulario 
          setGasto1={setGasto1}
          setCrear={setCrear}/>
          </div>
          <div className='one-half column'>
          <Lista
          gastos={gastos}
          />
          <Control
          presupuesto={presupuesto}
          restante={restante}/>      
          
          </div>
        </div>
        )}

        </div>

      </header>
    </div>
  );
}

export default App;
