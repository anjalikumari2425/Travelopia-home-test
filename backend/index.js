const express = require("express");
const userController = require('./controllers/user.controller');
const connect = require("./configs/db");
const cors = require("cors");
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/users',userController);

app.get('/',(req,res)=> {
  res.send("Hello");
})

app.listen(PORT, async function(err){
  if (err) throw err;
  await connect();
  console.log("listening on port");
});