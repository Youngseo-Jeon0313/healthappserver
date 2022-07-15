//api key 0degw3slkdgj0924863
const port = 8080; //process.env.port || 5000
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const express = require('express'); //express app을 생성함
const server = express(); //express.Router() : router 객체를 생성한다. 미들웨어와 http 메소드 라우트를 server에 붙일 수 있다.
const cors = require("cors");
const User = require('./models/user')
const recordsRoutes = require('./routes/records');
const adminRoutes = require('./routes/admin')

//다음 두 줄은 multer를 사용하는 방법을 의미한다.
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req,file,cb){
      cb(null, 'uploads/');
    },
    filename: function(req,file,cb){
      cb(null, file.originalname);
    }
  })
}) 
//이러면 자동으로 upload라는 파일이 생성되고 그 안에 이미지파일 또는 파일 이름이 저장되게 된다.
const cookieParser= require('cookie-parser');
server.use(cookieParser('23u342t049(323958@%'))


// app.use((req,res,next) => {
//   User.findById("1234aa")
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// })
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public'))); //public이라는 경로에서 정적 파일들을 불러온다.
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
