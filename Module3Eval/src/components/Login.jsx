import React from 'react'
import { useState } from 'react'
import   {useNavigate}  from 'react-router-dom'

function Login() {
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const navigate = useNavigate()
    
    const handleSubmit=()=>{
        if(email==="admin@gmail.com" && password==="admin1234"){
           
            localStorage.getItem("isloggenIn")

            navigate("/admin/deshboard")
        }
        else if(email==="customer@gmail.com" && password==="customer1234"){
              localStorage.getItem("isloggenIn")
            navigate("/customers/deshboard")
        }
        else{
            alert("email or password is wrong")
        }

        

    }
  return (

    <div>
          <form  onSubmit={handleSubmit}>
          <input type="email" value={email} placeholder='enter email'  
          onChange={((e)=>setEmail(e.target.value))}/>

          <input type="password" value={password} placeholder='enter password'  
          onChange={((e)=>setPassword(e.target.value))}/>

          <button type='submit'>Login</button>
         </form>
         
    </div>


  )
}

export default Login