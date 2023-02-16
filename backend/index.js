const express = require("express");
const userController = require('./controllers/user.controller');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use('/users',userController);

app.get('/',(req,res)=> {
  res.send("Hello");
})

app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});