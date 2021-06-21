import React, { useState } from "react";

import { Card, ListGroup } from "react-bootstrap";
import "./User.css";

 
function User({user}) {
    console.log(user)

    const [showText, setShowText] = useState(false);
    const[add,minus]=useState(true);

    const onClick = () => {setShowText(!showText); minus(!add)};


    const Text = () => 
    <div className = "show">
      <ul> <ListGroup variant="flush" >
          <li><ListGroup.Item>CompanyName: {user.company.name}</ListGroup.Item> </li>
          <li> <ListGroup.Item>Adress: {user.address.city} <br/>
          street: {user.address.street} </ListGroup.Item> </li> 
        </ListGroup> </ul>
    </div>;

  
  return (
    <div>

      <Card style={{ width: "18rem", marginTop:'2rem',marginLeft:'1rem',marginRight:'1rem' }}>

       <ul> <ListGroup variant="flush" className="mb-2">
       <li><ListGroup.Item>id: {user.id}</ListGroup.Item></li>
          <li><ListGroup.Item>name: {user.name}</ListGroup.Item></li>
          <li><ListGroup.Item>username : {user.username}</ListGroup.Item></li>
          <li><ListGroup.Item>phone : {user.phone}</ListGroup.Item></li>
          <li><ListGroup.Item>website : {user.website}</ListGroup.Item></li>
          <li><ListGroup.Item>Company : {user.company.bs} 
           <br/></ListGroup.Item></li>
          
        </ListGroup> </ul>
      </Card>
      <button onClick={onClick}>{add? 'ShowMore':'Hide'}</button>
      {showText ? <Text/> : null}

    </div>

  );
}

export default User;