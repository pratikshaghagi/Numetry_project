import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here

    // Navigate to another route upon successful login
    navigate('./Layout');
  };

  return (
    <div className="Auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className='input-group'>
          <label>Email:</label>
          <input type='text' placeholder='Type Email' />
        </div>
        <div className='input-group'>
          <label>Password:</label>
          <input type='Password' placeholder='Type Password' />
        </div>
        <div className='input-group'>
          <button type="submit">Submit</button>
        </div>
        <p>Forgot your password? <a href='/forgot-password'>Click here</a></p>
      </form>
    </div>
  );
};
export default Login;





/*import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const navigate = useNavigate();
  const goto =()=> {
    navigate("/Layout");
  }
}

const Login = () => {
  
  return (
    <div className="Auth-container">
      <h2>Login</h2>
       <form>
        <div className='input-group'>
            <label>Email:</label>
            <input type='text' placeholder='Type Email' />
        </div>
        <div className='input-group'>
            <label>Password:</label>
            <input type='Password' placeholder='Type Password' />
        </div>
        
        <div className='input-group'>
        <button onClick={() => login(navigate)}>Submit</button>
            
        </div>
        <p>Forgot your password? <a href='/forgot-password'></a></p>
       </form>
    </div>
  );
};

export default Login;
*/