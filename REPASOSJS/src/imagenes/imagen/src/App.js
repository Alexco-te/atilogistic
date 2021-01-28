import React, { useEffect, useState } from 'react';
import Form from './componenetes/Form';
import Listado from './componenetes/Listado';


function App() {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [actual, setActual] = useState(1)
  const [totalPag, setTotalPag] = useState(1)

  useEffect(() => {
    const consult = async () => {

      if(busqueda === '')return;
      const imgxpag = 30;
      const key ='20063638-14920caafc8cc5a9459963839'; 
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgxpag}&page=${actual}`
  
      const respuesta =await fetch(url)
      const resultado = await respuesta.json()

      setImagenes(resultado.hits);
      const guarTotalPags = Math.ceil(resultado.totalHits/imgxpag);
      setTotalPag(guarTotalPags);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }
    consult();
   
  }, [busqueda, actual])

  const paginaAnterior =()=>{
    const pagActual = actual - 1;
    if (pagActual === 0)return;

    setActual(pagActual)

  }
  const paginaSiguiente =()=>{
    const pagActual = actual + 1;
    if (pagActual > totalPag)return;

    setActual(pagActual)

  }
  return (
    <div className = "container">
      <div className = "jumbotron">
        <p className= "lead text-center">
          Buscador de  imagenes 
        </p>
        <Form
        setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <Listado 
          imagenes={imagenes}
        />
        {(actual===1)?null:(     <button 
        type="button"
        className= "bbtn btn-info mr-1"
        onClick={paginaAnterior}
        >  &laquo; Anterior   

        </button>)}
        {(actual===totalPag)?null:<button 
        type="button"
        className= "bbtn btn-info"
        onClick={paginaSiguiente}
        >   Siguiente &raquo;   

        </button>}
      </div>
    </div>
  );
}

export default App;
