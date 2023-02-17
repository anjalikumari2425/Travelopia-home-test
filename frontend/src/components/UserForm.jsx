import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {validateEmail} from '../utils/validation-helper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from "axios";
import './UserForm.css';

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
  const classes = useStyles();
  const [formdata, setFormdata] = useState({});

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id || e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, formdata);
    if (!validateEmail(formdata.email)) {
      alert("Please enter a valid email");
      return;
    }
    axios.post('users', formdata)
    .then(function (response) {
      console.log(response);
      alert("Successfully details are added")
    })
    .catch(function (error) {
      console.log(error);
      alert("failed to add the user details, please fill the details")
    });
  };

  const countries = [
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'AFRICA',
    label: 'Africa',
  },
  {
    value: 'EUROPE',
    label: 'Europe',
  },
];

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div sx={classes.containerStyle}>
        <TextField
          required
          id="name"
          label="Name"
          className="input-field"
          variant="outlined"
          placeholder="Enter your name"
          value={formdata['name']}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
          value={formdata['email']}
          onChange={handleChange}
        />
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            variant="outlined"
            value={formdata['country']}
            onChange={handleChange}
            label="Country"
          >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <TextField
          required
          id="passengers"
          label="Number of Passengers"
          type="number"
          variant="outlined"
          value={formdata['passengers']}
          onChange={handleChange}
        />
        <TextField
          required
          id="budget"
          label="Budget per person"
          type="number"
          variant="outlined"
          placeholder="Budget per person in $"
          value={formdata['budget']}
          onChange={handleChange}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
    
  );
}

export default UserForm;

