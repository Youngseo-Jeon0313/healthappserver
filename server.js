//api key 0degw3slkdgj0924863

const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
const User = require('./models/user')
// app.use('/add-product',(req,res,next)=> {
//     console.log("In the middleware!");
//     res.send('<h1>The "Add Product" Page</h1>')
// })

// app.use('/',(req,res,next)=> {
//     console.log('In another middleware!');
//     res.send("<h1>Hello from Express!</h1>")
// })

// app.use((req,res,next) => {
//   User.findById("1234aa")
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// })
app.post('/diary',(req,res,next)=> {
  console.log("Here in Diary!!");
  res.send("<h1>Here in the Diary !!</h1>")
  next()
})

app.use(cors({origin:true, credential:true}));
const port = 8080; //process.env.port || 5000

app.get('/', (req, res) => res.send('Hello World! 안녕하세요'))

mongoose
  .connect(
    "mongodb+srv://jeonyoungseo:GlOcKBoCrBpp4WU3@cluster0.uco5y.mongodb.net/healthappserver?retryWrites=true&w=majority",
    )
  .then((result) => {
    app.listen(port);
    console.log('start server!')
  })
  .catch((err) => {
    console.log(err);
  });


 