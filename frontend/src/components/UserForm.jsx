import React, { useState } from 'react';
import {validateEmail} from '../utils/validation-helper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from "axios";
import './UserForm.css';

const UserForm = (props) =>{
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
    axios.post('http://localhost:8080/users', formdata)
    .then(function (response) {
      console.log(response);
      alert("Successfully details are added")
    })
    .catch(function (error) {
      console.log(error);
      alert("Failed to add the user details, please fill the details")
    });
  };

  const countries = [
  {
    value: 'India',
    label: 'India',
    default: true,
  },
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
];

  return (
    <div className="form-container">
    <form className="user-form" onSubmit={handleSubmit}>
        <TextField
          required
          id="name"
          label="Name"
          name="name"
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
          name="email"
          variant="outlined"
          className="input-field"
          placeholder="Enter your email"
          value={formdata['email']}
          onChange={handleChange}
        />
        <FormControl className="country-field">
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
            <MenuItem default={option.default} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <TextField
          required
          id="passengers"
          label="Number of Passengers"
          name="passengers"
          type="number"
          className="input-field"
          variant="outlined"
          value={formdata['passengers']}
          onChange={handleChange}
        />
        <TextField
          required
          id="budget"
          label="Budget per person"
          name="budget"
          type="number"
          className="input-field"
          variant="outlined"
          placeholder="Budget per person in $"
          value={formdata['budget']}
          onChange={handleChange}
        />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
    
  );
}

export default UserForm;

