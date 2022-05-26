const express = require('express')
const bodyParser=require('body-parser');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let user=require('./route/index')
app.use('/', user.router)


var port =5500;
app.listen(port, ()=>{
    console.log(`app is listening this: ${port}`);
});