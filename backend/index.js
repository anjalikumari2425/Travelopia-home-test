const express = require("express");
const userController = require('./controllers/user.controller');
const connect = require("./configs/db");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use('/users',userController);

app.get('/',(req,res)=> {
  res.send("Hello");
})

app.listen(PORT, async function(err){
  if (err) throw err;
  await connect();
  console.log("listening on port");
});