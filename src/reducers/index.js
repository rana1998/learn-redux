import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';

const allRedcuers = combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer
})

export default allRedcuers;