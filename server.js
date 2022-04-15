//api key 0degw3slkdgj0924863

const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const User = require('./models/user')
// app.use('/add-product',(req,res,next)=> {
//     console.log("In the middleware!");
//     res.send('<h1>The "Add Product" Page</h1>')
// })

// app.use('/',(req,res,next)=> {
//     console.log('In another middleware!');
//     res.send("<h1>Hello from Express!</h1>")
// })

app.use((req,res,next) => {
  User.findById("1234aa")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
})

 const port = 4000; //process.env.port || 4000


mongoose
  .connect(
    "mongodb+srv://jeonyoungseo:GlOcKBoCrBpp4WU3@cluster0.uco5y.mongodb.net/healthappserver?retryWrites=true&w=majority",
    port
    )
  .then((result) => {
    app.listen(port);
    console.log('start server!')
  })
  .catch((err) => {
    console.log(err);
  });


 