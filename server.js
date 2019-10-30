const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const router = express.Router();
const path = require('path');

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/login.html'));
})
router.get('/login.css',(req,res)=>{
    res.sendFile(path.join(__dirname+'/login.css'));
})
router.get('/login.js',(req,res)=>{
    res.sendFile(path.join(__dirname+'/login.js'));
})
router.get('/logo.png',(req,res)=>{
    res.sendFile(path.join(__dirname+'/logo.png'));
})
app.use('/', router);
app.listen(3000)