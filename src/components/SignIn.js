import React, { useState } from 'react'
import './Sign.css';
import { Link, useNavigate } from 'react-router-dom';

const initialValue={
  email:'',
 password:'',
}



const SignIn = () => {

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

    if(!data.email.trim()){
      errors.email="Email is required."
    }else if(!/^\S+@\S+\.\S+$/.test(data.email)){
      errors.email="Invalid email address."
    }

    if(data.password === "" || data.password.length < 6){
      errors.password="Please enter password"
    }
    return errors;
  }

    const addUserDetails=(e)=>{
      e.preventDefault();
  
  
      const newErrors=validation(user);
      setErrors(newErrors);
  
      if(Object.keys(newErrors).length===0){
        alert("Form Login Successfully")
        navigate('/Home');
      }else{
        alert("Form Submission failed due to validation errors");
      }
    }

   
  return (
    <>
   <div  className="addUser">
    <h3>Sign In</h3>
    <form className="addUserForm">
        <div className="inputGroup">
        

        <label For='email'>Email:</label>
        <input type='email' id='email' autoComplete='off' placeholder='Enter your email' name='email' onChange={(e)=>onValueChange(e)}/>
        {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}

        <label For='password'>Password:</label>
        <input type='password' id='password' autoComplete='off' placeholder='Enter your Password'  name='password' onChange={(e)=>onValueChange(e)}/>
        {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}

        <button type="submit" className="btn btn-success" onClick={addUserDetails}>Sign In</button>
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