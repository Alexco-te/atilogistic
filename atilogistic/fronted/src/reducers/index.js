import {combineReducers} from 'redux'
import usuarioDucks from "./usuarioDucks"

export default combineReducers({
    usuario:usuarioDucks
})