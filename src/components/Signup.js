import React from 'react';
import './Sign.css';
import  { Link } from 'react-router-dom';


const Signup = () => {
  return (
   <>
   <div  className="addUser">
    <h3>Sign Up</h3>
    <form className="addUserForm">
        <div className="inputGroup">
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' autoComplete='off' placeholder='Enter your name'/>

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' autoComplete='off' placeholder='Enter your email'/>

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' autoComplete='off' placeholder='Enter your password'/>

        <label htmlFor='password' >Confirmpassword:</label>

        <input type='password' id='password' autoComplete='off' placeholder='Enter your Confirm Password'/>

        <button type="submit" className="btn btn-success">Sign Up</button>
        </div>  
    </form>

    <div className='signin'>
        <p>Already have an account ?</p>
        <Link to="/signin" type='submit' className='btn btn-primary'>SignIn</Link>
    </div>
   </div>

   </>
  );
};

export default Signup;