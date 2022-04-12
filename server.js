const http = require('http');

const express = require('express');
const mongoConnect = require('./util/database')
const app = express();

// app.use('/add-product',(req,res,next)=> {
//     console.log("In the middleware!");
//     res.send('<h1>The "Add Product" Page</h1>')
// })

// app.use('/',(req,res,next)=> {
//     console.log('In another middleware!');
//     res.send("<h1>Hello from Express!</h1>")
// })

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
})