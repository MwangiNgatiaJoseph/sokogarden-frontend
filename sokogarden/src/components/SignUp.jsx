import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  // initialize the hooks
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  // initialize other hooks e.g lpading,success and error

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // function to send out the data to the server

  const submit=async(e)=>{

    e.preventDefault()

    setLoading("Please wait....")

    try {

      const data=new FormData()

      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      // calling the api

      const response= await axios.post("http://shinejoe.alwaysdata.net/api/signup",data)

      setLoading("")

      setSuccess(response.data.message)

      // reset your form

      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")

      

    } catch (error) {
      setLoading("")
      setError(error.message)
      

    }

    
    
  }

  return (
    <div className='row justify-content-center mt-3'>

      <div className='card shadow col-md-6'>

        <h1>Sign Up</h1>
        <form action="" onSubmit={submit}>
          {username}

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        <input type="Name"placeholder='Enter Your User Name' className='form-control' required  value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        {email}
        <input type="Email"placeholder='Enter Your Email' className='form-control'  required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        {phone}
        <input type="tel"placeholder='Enter Phone Number' className='form-control'  required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />
      {password}
        <input type="password"placeholder='Enter Your Password' className='form-control'  required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />

        
         <input type="submit"value="Sign Up" className='btn bg-success   form-control  w-100 text-white'/>

         <br />

         <p>Already have an account?<Link to='/signin'>sign in</Link></p>


        </form>

      </div>
        



    </div>
  )
}

export default SignUp