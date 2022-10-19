import React from 'react'
import { useState } from 'react'

export default function Login1() {
  const[email,setEmail] =useState("")
  const[password,setPassword] =useState("")
  const handleLogin=(e)=>{
      e.preventDefault()
      const data = {email , password}
      console.log(data)
  }
  return (
    <>
    <div className='container signup'>
       <h1>Login Here</h1>
   <form onSubmit={handleLogin}>
  
        <div className="form-group">
          <label htmlFor="Email">Email address:</label>
          <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" className="form-control" id="Password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary" value="Login">Login</button>
</form>
    </div>
    </>
  )
}
