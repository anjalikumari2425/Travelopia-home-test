import React, { useState, useEffect } from 'react';
import axios from "axios";
import {baseUrl} from './../configs/local.js';
import './UserDetails.css';

const UserDetails = (props) =>{

  useEffect(() => {
    axios({
      url: `${baseUrl}/users`,
    })
      .then((res) => {
        console.log(res.data);
        setUsersList(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [usersList, setUsersList] = useState([]);

  return (
      <div className="main">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">COUNTRY</th>
            <th scope="col">NUMBER OF PASSENGERS</th>
            <th scope="col">BUDGET PER PERSON</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((ele,index) => (
            <tr key={ele._id}>
              <th scope="row">{index+1}</th>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.country}</td>
              <td>{ele.passengers}</td>
              <td> $ {ele.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;

