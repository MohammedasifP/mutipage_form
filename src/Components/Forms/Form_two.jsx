import { useContext, useEffect, useState } from "react"
import { RegistartionContext } from "../ResgitrationContext/RegitrationContext"
import { useNavigate } from "react-router-dom"

export const Formtwo=()=>{
const {navigate}=useNavigate()    
const [finaldata,setFinaldata]=useState({})
const {obj}=useContext(RegistartionContext)
useEffect(()=>{
  const x=obj.value;
      
      setFinaldata({...finaldata,...x})
},[])
   console.log(finaldata)

 const handlechange=(e)=>{
    const {id,value}=e.target;
    setFinaldata({...finaldata,[id]:value})
 }
return(
    <div>
      <div>
                 <label>state of residence:</label>
                  <input type="text" placeholder="Enter your state of residence" id="state" onChange={handlechange} /><br/><br/>

                  <label>address:</label> 
                  <input type="text" placeholder="Enter your address" id="address" onChange={handlechange}/><br/><br/>

                  <label>pin code:</label>
                  <input type="text" placeholder="enter pincode" id="pin" onChange={handlechange}/> <br/>

                  <button disabled={finaldata.name==undefined || finaldata.age==undefined || finaldata.dob==undefined
                  || finaldata.state==undefined || finaldata.address==undefined || finaldata.pin==undefined } >submit</button>
      </div>
    </div>
)

}