import React from 'react'

export default function SignUp1() {
  return (
    <>
     <div className='container signup'>
        <h1>SignUp Here</h1>
     <form>
     <div className="form-group">
    <label htmlFor="UserName">UserName:</label>
    <input type="text" className="form-control" id="UserName" aria-describedby="emailHelp" placeholder="Enter name" required />
  </div>
  <div className="form-group">
    <label htmlFor="Email">Email address:</label>
    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" required />
  </div>
  <div className="form-group">
    <label htmlFor="Password">Password:</label>
    <input type="password" className="form-control" id="Password" placeholder="Password" required />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     </div>

    </>

    )
}
