
import {legacy_createStore} from 'redux'
import {rootReducer }from '../../src/Redux/Reducer'
 export let Store=legacy_createStore(rootReducer) 

