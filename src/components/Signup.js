import React, { useState } from 'react';
import './Sign.css';
import  { Link, useNavigate } from 'react-router-dom';

const initialValue={
  username:'',
  email:'',
 password:'',
 confirmpass:''

}



const Signup = () => {


  const [user, setUser]=useState(initialValue);
  const [errors, setErrors]=useState({});
  const navigate = useNavigate();
  const onValueChange=(e)=>{
    // console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
 
  }

  const validation =(data)=>{
    const errors={};
    if(!data.username.trim()){
      errors.username="Name is required."
    }

    if(!data.email.trim()){
      errors.email="Email is required."
    }else if(!/^\S+@\S+\.\S+$/.test(data.email)){
      errors.email="Invalid email address."
    }

    if(data.password === "" || data.password.length < 6){
      errors.password="Please enter password"
    }

    if(data.confirmpass ==="" || !data.password){
      errors.confirmpass="Please enter confirmpassword"
    }
    return errors;
  }

  const addUserDetails=(e)=>{
    e.preventDefault();


    const newErrors=validation(user);
    setErrors(newErrors);

    if(Object.keys(newErrors).length===0){
      alert("Form Submitted Successfully")
      navigate('/Home');
    }else{
      alert("Form Submission failed due to validation errors");
    }
  }

  return (
   <>
   <div  className="addUser">
    <h3>Sign Up</h3>
    <form className="addUserForm">
        <div className="inputGroup">
        <label htmlFor='name'>Username:</label>
        <input type='text' id='name' autoComplete='off' placeholder='Enter your name' name='username' onChange={(e)=>onValueChange(e)}/>
        {errors.username && (
                        <span className="error-message">
                            {errors.username}
                        </span>
                    )}


        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' autoComplete='off' placeholder='Enter your email'  name='email' onChange={(e)=>onValueChange(e)}/>
        {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}


        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' autoComplete='off' placeholder='Enter your password'  name='password' onChange={(e)=>onValueChange(e)}/>
        {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}


        <label htmlFor='password' >Confirmpassword:</label>

        <input type='password' id='password' autoComplete='off' placeholder='Enter your Confirm Password' name='confirmpass' onChange={(e)=>onValueChange(e)}/>
        {errors.confirmpass && (
                        <span className="error-message">
                            {errors.confirmpass}
                        </span>
                    )}


        <button type="submit" className="btn btn-success" onClick={addUserDetails}>Sign Up</button>
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