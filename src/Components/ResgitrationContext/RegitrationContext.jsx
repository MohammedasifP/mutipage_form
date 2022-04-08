import { createContext, useState } from 'react'
export const RegistartionContext=createContext();


export const RegistartionContextProvider=({children})=>{
const [obj,setObj]=useState({})    
  
var objfun=(value)=>{
   setObj({value})
}    
    
  return(
    <RegistartionContext.Provider value={{objfun,obj}}>{children}</RegistartionContext.Provider>
  )
 


}
