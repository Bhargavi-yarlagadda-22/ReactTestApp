import React, { useEffect, useState } from "react";
import "./Users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
   
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
   
   
  return (
    <div>
       
        {users.map((user) => {
            return(
            <div>
          <h1>{user.userId}.{user.title}</h1>
          
          <p>{user.body}</p></div>
            )
        })}
      
    </div>
  );
    };

export default Users;
