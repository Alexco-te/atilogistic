import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Form from './componentes/Form'


function App() {
  return (
    <Router>

    <Switch>
      <Route exact path ="/" component ={Form}/>
    </Switch>
      
    </Router>
  );
}

export default App;
