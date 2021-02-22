import axios from 'axios'
import Swal from 'sweetalert2';

const initialState ={
    productos:[],
    error:null,
    loading:false
}

const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO'
const AGREGAR_PRODUCTO_EXITO = 'AGREGAR_PRODUCTO_EXITO'
const AGREGAR_PRODUCTO_ERROR = 'AGREGAR_PRODUCTO_ERROR'

export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO: 
        return{
            ...state,
            loading: action.payload 
        }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos:[...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state; 

    }

}

export function  agregarProduct (producto) {
    return (dispatch)=>{
        dispatch({
            type:AGREGAR_PRODUCTO,
            payload: true
        })

        try {
            dispatch({
                type:AGREGAR_PRODUCTO_EXITO,
                payload: producto
            })
            Swal.fire(
                'Correcto',
                'El producto se agrego exitosamente',
                'success'
            )
        } catch (error) {
            dispatch({
                type:AGREGAR_PRODUCTO_ERROR,
                payload:true
            })
            
        }

    }
}