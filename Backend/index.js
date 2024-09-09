const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectDB } = require('./config/connection')
const { router } = require('./routes')
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(router)

app.listen(8000,()=>{
    console.log("Server is Running")
    connectDB();
}) 