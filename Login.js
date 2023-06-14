 

import React from "react";
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import {FaEnvelope} from "react-icons/fa"
import "./Login.css";
 

function Login() {
 
  return (
    <div className="container">
     
        <form className="form-group container" >
          <h3> LOGIN</h3>
          <div className="form-group">
          <span><FaEnvelope/></span> 
            <input
              type="email"
              className="form-control"
              placeholder="E-mail" 
               
            
            />
            
          </div>
          <div className="form-group">
          <span><FaUserAlt/></span> 
            <input
              type="email"
              className="form-control"
              placeholder="Username" 
               
            
            />
            
          </div>

          <div className="form-group">
          <span><FaLock/></span> 
            <input
              type="password"
              className="form-control"
              placeholder="password"/>
            
          </div>

          <button type="submit">
            Login
          </button>
          <button type="submit">
            Logout
          </button>

          
        </form>
      
        
      
    </div>
  );
}

export default Login;