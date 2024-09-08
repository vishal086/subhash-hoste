const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')
const {Register} = require('./models/complainstModel')
const { connectDB } = require('./config/connection')
const { Contact } = require('./models/ContactModel')
const app = express()

app.use(express.json())

// app.use(cors())

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
    
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send("Welcomt to React - Backend")
    console.log(req.body)
}) 


app.post('/complaint',(req,res)=>{
    const data = Register.create(req.body)
    return res.status(201).json({
        success:true,
        message : "Data send",
        data
    })
    console.log(req.body)

})
app.post('/contact',(req,res)=>{ 
    const data = Contact.create(req.body)
    return res.status(201).json({ 
        success:true,
        message : "Data send",
        data
    })
    console.log(req.body)

})
app.listen(8000,()=>{
    console.log("Server is Running")
    connectDB();
}) 