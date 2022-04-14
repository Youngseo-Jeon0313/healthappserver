const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


// app.use('/add-product',(req,res,next)=> {
//     console.log("In the middleware!");
//     res.send('<h1>The "Add Product" Page</h1>')
// })

// app.use('/',(req,res,next)=> {
//     console.log('In another middleware!');
//     res.send("<h1>Hello from Express!</h1>")
// })

mongoose
  .connect(
    "mongodb+srv://jeonyoungseo:GlOcKBoCrBpp4WU3@cluster0.uco5y.mongodb.net/healthappserver?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
    console.log('start server!')
  })
  .catch((err) => {
    console.log(err);
  });