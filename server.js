//api key 0degw3slkdgj0924863

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const express = require('express');
const app = express();
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
app.use(bodyParser.urlencoded({extended:true}))
app.use(recordsRoutes);

//app.use(errorController.get404)

app.use(cors({origin:true, credential:true}));
const port = 8080; //process.env.port || 5000


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


 
app.get('/', (req, res) => res.send('Hello World! 안녕하세요'))
