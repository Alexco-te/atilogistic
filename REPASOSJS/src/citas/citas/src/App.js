import React, { Fragment, useState} from 'react';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

function App() {

  const [citas, setCitas] = useState([])

  // FUNCION AGREGAR CITA

  const crearCitas = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }
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
            Administrar citas
          </h2>
          {citas.map(cita=>(
            <Cita
            key={cita.id}
            cita={cita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
