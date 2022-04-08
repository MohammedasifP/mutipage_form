import { useContext, useState } from 'react'
import './Form_one.css'
import { RegistartionContext } from '../ResgitrationContext/RegitrationContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export const Formone=({children})=>{
    const [formdata,setFormdata]=useState({})
    const navigate=useNavigate();
    const handlechange=(e)=>{
        const {id,value}=e.target;
        //  console.log(id,value)
        setFormdata({...formdata,[id]:value})
    }
    const {objfun,obj}=useContext(RegistartionContext)

    const onclickfun=()=>{
        objfun(formdata)
        navigate("/registration/two")
    }
   return(
       <div>
         
           <div className='f1_div'>
                  <label>Name:</label>
                  <input type="text" placeholder="Enter your name" id="name" onChange={handlechange} /><br/><br/>

                  <label>Enter age:</label> 
                  <input type="Number" placeholder="Enter your age" id="age" onChange={handlechange}/><br/><br/>

                  <label>Date og birth:</label>
                  <input type="text" placeholder="enter your date of birth" id="dob" onChange={handlechange}/> <br/>

                  <button disabled={formdata.name==undefined || formdata.age==undefined || formdata.dob==undefined} onClick={onclickfun}>Next</button>
                
           </div>
       </div>
   )
}