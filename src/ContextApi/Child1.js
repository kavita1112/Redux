
import { useContext } from "react"
import { newData } from "./Child"
const Child1=()=>{
    let data=useContext(newData)
    return <div>
       <h1> {data}</h1>
     <h1>Hello</h1>
    </div>
}

export default Child1
