const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {Register} = require('./models/complainstModel')
const { connectDB } = require('./config/connection')
const { Contact } = require('./models/ContactModel')
const app = express()

app.use(express.json())

// app.use(cors())

app.use(cors({
    origin: true,  // Replace this with the actual frontend origin
    credentials: true,  // Enable credentials if you're passing cookies or auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
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