import { createContext, useContext } from "react"
import { ThemeContext } from "./ContextProvider"
import Child1 from "./Child1"

export let newData = createContext();

const Child=()=>{
    let myName=useContext(ThemeContext)
    console.log(myName)
    return <div>
        <h1>{myName}</h1>
   

        <newData.Provider value="hellochild">
           <Child1/>
        </newData.Provider>
    </div>
}

export default Child