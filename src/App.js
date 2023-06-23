import {useSelector, useDispatch} from "react-redux"
import Increment from "./Redux/Action"
import Child from "./ContextApi/Child"

const App=()=>{
let state=useSelector((state)=>state.Reducer.count)
let dispatch=useDispatch()

// let myName = "kavita"
  return <div>
    <h1>{state}</h1>
    <button onClick={()=>{dispatch(Increment())}}>increment</button>
    <Child/>
  </div>
}

export default App;


