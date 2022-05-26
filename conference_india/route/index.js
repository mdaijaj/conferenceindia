const express=require('express')
const users= require('../controller/index')
const router=express()

//routes
// router.post('/login', users.login)
router.post('/signup', users.signup)


module.exports={
    router
}; 