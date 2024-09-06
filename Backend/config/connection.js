const mongoose = require('mongoose')
const URL = "mongodb://127.0.0.1:27017/Shivam"

const connectDB = async() =>{
    try {
        mongoose.connect(URL)
        console.log("DB Connected")
    } catch(err) {
        console.log("Connection Failed")
    }
}

module.exports = {connectDB}