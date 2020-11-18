import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import {useDispatch, useSelector, Provider} from 'react-redux'
import generateStore from '../src/redux/store'
import {login} from  "../src/redux/usuarioDuck"

function App() {
    const store = generateStore ()
    const dispatch = useDispatch ()
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
    return (
        <Provider store = {store}>
        <div>
            carlos
        </div>
        </Provider>
    );
 }

export default App
