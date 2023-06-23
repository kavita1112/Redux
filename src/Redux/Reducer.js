import {combineReducers} from "redux"
let intialstate={
   count:0
}

const Reducer=(state=intialstate,Action)=>{
   switch(Action.type){
      case "increment":
         return {...state, count:state.count + Action.payload}

      default :
      return state
   }
   
}

export let rootReducer=combineReducers({Reducer})