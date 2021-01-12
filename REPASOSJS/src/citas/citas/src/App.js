import React, { Fragment, useEffect, useState} from 'react';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';


function App() {

let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales)

  //use effect cambio usestate

  useEffect (()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else{
      localStorage.setItem('citas',JSON.stringify([]));
    } 
  }, [citas] );

  // FUNCION AGREGAR CITA

  const crearCitas = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }
    //Funsion eliminar cita
    const eliminarCita = id => {
      const nuevasCitas = citas.filter(citas => citas.id !== id)
      setCitas(nuevasCitas)
    }
    const titulo =citas.length === 0 ? "No hay citas" : "Administra tus citas"

  return (
    <Fragment>

    <h1>
      Administrador de pacientes
    </h1>
    
    <div className ='container'>
      <div className ='row'>
        <div className='one-half column'>
          <Formulario crearCitas ={crearCitas} />
        </div>
        <div className='one-half column'>
          <h2>
            {titulo}
          </h2>
          {citas.map(cita=>(
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
