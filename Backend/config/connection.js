const mongoose = require('mongoose')
// const URL = "mongodb://127.0.0.1:27017/Shivam"
// const URI = "mongodb+srv://vishalkumar03072001:BIe3wUY7b073jkkD@cluster0.4mqrp.mongodb.net/Subhash?retryWrites=true&w=majority&appName=Cluster0"


const URI = "mongodb+srv://hsrsrr371:CHAz4cgnZ0zsJHdK@cluster0.eo543.mongodb.net/Subhash-Hostel?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async() =>{
    try {
        mongoose.connect(URI)
        console.log("DB Connected")
    } catch(err) {
        console.log("Connection Failed") 
    }
}

module.exports = {connectDB}