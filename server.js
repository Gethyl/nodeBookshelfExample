require('dotenv').config()
const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./routes/users')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users',userRoute)

const port = process.env.PORT || '3000'
app.listen(port,()=> {console.log("+++NODE SERVER+++ Express Running on PORT:3000!!!")})