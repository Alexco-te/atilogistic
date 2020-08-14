import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import home from './components/pages/home';

function App() {
    return (<>
       <BrowserRouter>
        <Switch>
            <Route exact path= "/" component={home}/>
        </Switch>
       </BrowserRouter>
    </>
    );
 }

export default App
