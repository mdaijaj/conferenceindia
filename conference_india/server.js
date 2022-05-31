const express = require('express')
const cors= require('cors')
const app = express()
const cookieParser= require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

let user=require('./route/index')
app.use('/', user.router)


var port =5500;
app.listen(port, ()=>{
    console.log(`app is listening this: ${port}`);
});