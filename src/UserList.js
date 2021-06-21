import React, { useState, useEffect } from "react";
import axios from "axios";
import User from './User'

function UsersList() {
    const [users, setUsers] = useState([]); /* intial state*/

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users") /* get request using axios */
        .then(response => setUsers(response.data)) /*uppdate the post state variable which will be rendred in the UI */
        .catch(err=>{console.log(err)}); /*error */
      },
       []);/*to fetch the data only one
       */
      console.log(users)
      const style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      };
    return (
        <div  className='Userlist' style={style} >
            {users.map((user)=>
            <User user={user}/>
            )}
        </div>
    )
}

export default  UsersList