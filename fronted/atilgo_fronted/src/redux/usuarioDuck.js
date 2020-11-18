import AuthService from "../components/pages/home/services/auth"
//constantes

 const REGISTER_SUCCESS = "REGISTER_SUCCESS";
 const REGISTER_FAIL = "REGISTER_FAIL";
 const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 const LOGIN_FAIL = "LOGIN_FAIL";
 const LOGOUT = "LOGOUT"

 const user = JSON.parse(localStorage.getItem("auth-token"))

const initialState = user 
    ?{logeado:true,user}
    :{logeado:false, user:null};

//reducers
export default function Usuarioslogin(state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
        default:
            return state
    }
}

// acciones

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
     
          dispatch({
            type: LOGIN_FAIL,
            payload: {error}
          });

        return Promise.reject();
      }
    );
  };

