import React from 'react'
import './Sign.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
   <div  className="addUser">
    <h3>Sign In</h3>
    <form className="addUserForm">
        <div className="inputGroup">
        

        <label For='email'>Email:</label>
        <input type='email' id='email' autoComplete='off' placeholder='Enter your email'/>

        <label For='password'>Password:</label>
        <input type='password' id='password' autoComplete='off' placeholder='Enter your Password'/>

        <button type="submit" className="btn btn-success">Sign In</button>
        </div>  
    </form>
    <div className='signin'>
        <p>Don't  have an account ? </p>
        <Link to="/" type='submit' className='btn btn-primary'>SignUp</Link>
    </div>
   </div>

   </>
  )
}

export default SignIn