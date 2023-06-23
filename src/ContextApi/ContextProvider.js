import {  createContext } from "react";


export let ThemeContext=createContext();

const ContextHead=({children})=>{
    return <ThemeContext.Provider value="kavitha">
        {children}
    </ThemeContext.Provider>
}

export default ContextHead