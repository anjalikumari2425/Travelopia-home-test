const express = require("express");
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/', async(req,res)=> {
  const users = await userModel.find({});
  console.log(users);
  res.send(users);
});

router.post('/', async(req,res)=> {
  const {name,email,country,passengers,currency} = req.body;
  // userModel.create({name,email,country,passengers,currency});
  const user = new userModel({name,email,country,passengers,currency});
  user.save((err,result)=>{
    if(err) throw err;
    console.log(result);
  });
  res.send(user);
});

module.exports = router;