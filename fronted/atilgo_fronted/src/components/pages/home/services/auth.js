import axios from 'axios'

class AuthService {
    login(usuario, password){
        return axios.post ("http://192.168.100.22:3001/usuario/logeo",{usuario, password})
        .then ((response)=>{
            if (response.data.Token){

                let token = localStorage.getItem("auth-token");
                    if (token === null){
                        JSON.parse(localStorage.setItem("auth-token",""));
                        token = response.data.token;
                    }
            }
            return response.data
        })
    }
    logout(){
        localStorage.removeItem("auth-token")
    }
} 

export default new AuthService();
        