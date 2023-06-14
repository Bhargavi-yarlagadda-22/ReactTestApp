import React from "react";
 import Login from "./Components/Login";
 import Users from "./Components/Users";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
function App(){
    return(
      <BrowserRouter>
         <center>
            <nav> 
            <Link to ="/login"> Login </Link> || 
            <Link to ="/users"> Users </Link>  
             
       </nav>
         
        
        <Routes>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/users" element={<Users/>}></Route>
        </Routes>
         
        </center>
          </BrowserRouter>
    )
} 
export default App;