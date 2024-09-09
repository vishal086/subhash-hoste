const { Register } = require("../models/complainstModel")
const { Contact } = require("../models/ContactModel")

const home = async(req,res) => {
    res.send("Welcomt to React - Backend")
}
const complaint = async(req,res) => {
    const data = Register.create(req.body)
    return res.status(201).json({
        success:true,
        message : "Data send",
        data
    })
}


const contact = async(req,res) => {
    const data = Contact.create(req.body)
    return res.status(201).json({ 
        success:true,
        message : "Data send",
        data 
    })
}


module.exports = {complaint,contact,home};