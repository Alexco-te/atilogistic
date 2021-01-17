import React, { Fragment } from 'react';

const Contenedor =styled.iv`
  max-width:grid;
  margin: 0 auto;
  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat()(2,1fr);
    column-gap:2-rem;
  }

`


function App() {
  return (
    <Contenedor>
      <div>

      </div>
      <div>
        
      </div>

    </Contenedor>
  );
}

export default App;
