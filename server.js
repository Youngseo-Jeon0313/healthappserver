//api key 0degw3slkdgj0924863
const port = 8080; //process.env.port || 5000
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const express = require('express');
const server = express();
const cors = require("cors");
const User = require('./models/user')
const recordsRoutes = require('./routes/records');
const adminRoutes = require('./routes/admin')

// app.use((req,res,next) => {
//   User.findById("1234aa")
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// })
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({extended:true})) //확장할 수 있도록 허락
server.use(bodyParser.json()) //그 확장한 자료를 json으로 변환해줌
server.use(recordsRoutes);
//app.use(errorController.get404)


mongoose
  .connect(
    "mongodb+srv://jeonyoungseo:GlOcKBoCrBpp4WU3@cluster0.uco5y.mongodb.net/healthappserver?retryWrites=true&w=majority",
    )
  .then((result) => {
    server.listen(port);
    console.log('start server!')
  })
  .catch((err) => {
    console.log(err);
  });


 
server.get('/', (req, res) => res.send('Hello World! 안녕하세요'))
