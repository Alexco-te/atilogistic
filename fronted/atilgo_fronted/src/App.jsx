import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './components/pages/home/Home';
import UserContext from './context/UserContext';
import Axios from 'axios'



function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });
    useEffect (() => {
        const logeado = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null){
                localStorage.setItem("auth-token","");
                token = "";
            }
            const tokenRes = await Axios.post(
                "http://192.168.100.22:3001/usuario/getoken", 
                null, 
                { headers: {"x-auth-token": token }}
            );
            if (tokenRes.data){
                const userRes = await Axios.get("http://192.168.100.22:3001/usuario/", {headers: {"x-auth-token":token}
            });
            setUserData ({
             token,
             user: userRes.data
            })
            }
            console.log (tokenRes.data);
        }
         
        logeado();
    
    }, []);
    return (<>
       <BrowserRouter>
        <UserContext.Provider value = {{userData ,setUserData}}>
        <Switch>
            <Route exact path= "/" component={Home}/>
        </Switch>

        </UserContext.Provider>
       </BrowserRouter>
    </>
    );
 }

export default App
