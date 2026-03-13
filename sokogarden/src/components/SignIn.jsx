import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");
  const[loading,setLoading]=useState("");


  const navigate=useNavigate();

  const submit=async(e)=>{

    e.preventDefault()

    setLoading("Please wait...")

      try {

    const data=new FormData();
    data.append("email",email);
    data.append("password",password);


    const response=await axios.post("http://shinejoe.alwaysdata.net/api/signin",data)


      setLoading("")

      if (response.data.user){

        // if user is found,store user details in localstorage
        localStorage.setItem("user" , JSON.stringify(response.data.user));
        setSuccess(response.data.message);
        
        setEmail("")
        setPassword("")
        
        // Redirect to/getproducts component
        
        setTimeout(()=>{
          
          
          navigate("/");
        },2000)
      }

      else{
        // user Not Found,show Error message
        setError(response.data.message)
      }
      // If there was an Error,clear Loading

      
    
  } catch (error) {

      setLoading("")

      setError(error.data.message)
    
  }


  }



  return (
    <div className='row justify-content-center mt-5'>

    <div className='card shadow col-md-6'>

      <h1>Sign In</h1>

      <form action="" onSubmit={submit}>
        {email}

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        

        <input type="email" placeholder='Enter Your Email'  className='form-control'  required value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        

        <input type="password" placeholder='Enter Your Password' className='form-control'  required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        

         <input type="submit" value="Sign In" className='btn bg-success   form-control  w-100 text-white'/>

         <br />

         <p>Don`t have an account?<Link to='/signup'>sign up</Link></p>






      </form>
    </div>
        
    </div>
  )
}

export default SignIn