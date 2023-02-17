const express = require("express");
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/', async(req,res)=> {
  const users = await userModel.find({});
  console.log(users);
  res.send(users);
});

router.post('/', async(req,res)=> {
  try {
    console.log(req.body);
    const {name,email,country,passengers,budget} = req.body;
  const user = await userModel.create({name,email,country,passengers,budget});
  user.save((err,result)=>{
    if(err) throw err;
    console.log(result);
  });
  res.send(user);
  }
  catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;