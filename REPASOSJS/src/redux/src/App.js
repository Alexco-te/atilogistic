import React, { Fragment } from 'react';
import Header from './Componentes/Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Productos from './Componentes/Productos';
import NuevoP from './Componentes/NuevoP';
import EditProduct from './Componentes/EditProduct';

//REDUX
import {Provider} from 'react-redux'
import store from "./store"

function App() {
  return (
    <Router>
      <Provider store = {store}>
      <Header/>
      <div
        className ="container"
      >
        <Switch>
          <Route
            exact path = "/" component  ={Productos}
          />
          <Route
            exact path = "/productos/nuevos" component ={NuevoP}
          />
          <Route
            exact path = "/productos/editar/:id" component ={EditProduct}
          />
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
