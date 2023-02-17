import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios";
import './UserDetails.css';

// useEffect(() => {
//     axios({
//       url: "/users",
//     })
//       .then((res) => {
        
//         console.log(res.data.user);
//         setList(res.data.user);
        
//       })
//       .catch((err) => {
        
//         console.log(err);
//       });
//   }, []);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '100%',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UserForm = (props) =>{
  // const classes = useStyles();

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

export default UserForm;

