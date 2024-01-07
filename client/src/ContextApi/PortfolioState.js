import React,{useState} from "react"
import GlobalContext from "./globalContext";


const PortfolioState=(props)=>{
    const [value,newValue]=useState("uday")

    return(
        <GlobalContext.Provider value={{value}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default PortfolioState