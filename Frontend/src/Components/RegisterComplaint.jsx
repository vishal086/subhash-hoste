import React, { useState } from "react";
import "../Style/RegisterComplaint.css";
import axios from 'axios'
function Contact() {
  const [data,setData] = useState({
    name : "",
    roll : "",
    room : "",
    complaints: {
      fan: false,
      room: false,
      light: false,
      bathroom: false,
      other : false,
    },
    email : "",
    message : ""
  })

    const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      complaints: { ...data.complaints, [name]: checked }
    });

    };
  const handleForm = (e) => {
       const {name,value} = e.target
       setData({
            ...data,
            [name] : value
       })
  }
  console.log(data)
  const handleSubmit = async(e) =>{

    try {
      const res = await axios.post('https://subhash-hoste-backend.onrender.com/complaint',data)
      if(res)
      toast.success('Complaint Submitted successfully!');
    } catch(err) {
      toast.error('Failed to submit complaint. Please try again.');
    } 
  } 
  return (
    <>
      <form className="form" id="contact" onSubmit={handleSubmit}>
        <div action="" className="form-input">
          <h2 className="contact-text">Register You Complaints</h2>
          <div className="form-group">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" 
              name="name" 
              value={data.name} 
              onChange={handleForm}/>
            </div>
    
            <div>
              <label htmlFor="">Roll No.</label>
              <input 
              type="number" 
              name="roll" 
              value={data.roll}
              onChange={handleForm}/>
            </div>
            <div>
              <label htmlFor="">Room No.</label>
              <input 
              type="text" 
              name="room" 
              value={data.room}
              onChange={handleForm}/>
            </div>

           <div className="issue">
            <label htmlFor="">Issue:</label><br />
            <input className="checkbox" type="checkbox" name="fan"  checked={data.complaints.fan}
            onChange={handleCheckboxChange}/><label htmlFor="">Fan</label>
            <input className="checkbox" type="checkbox" name="room"  checked={data.complaints.room}
            onChange={handleCheckboxChange}/><label htmlFor="">Room</label>
            <input className="checkbox" type="checkbox" name="light"  checked={data.complaints.light}
            onChange={handleCheckboxChange}/><label htmlFor="">Light</label>
            <input className="checkbox" type="checkbox" name="bathroom"  checked={data.complaints.bathroom}
            onChange={handleCheckboxChange}/><label htmlFor="">Bathroom</label>
            <input className="checkbox" type="checkbox" name="other"  checked={data.complaints.other}
            onChange={handleCheckboxChange}/><label htmlFor="">Other</label>

           </div>
            <div>
              <label htmlFor="">Email</label>
              <input 
              type="email" 
              name="email" 
              value={data.email}
              onChange={handleForm}/>
            </div>
            
            <div>
              <label htmlFor="">Message</label>
              <input type="text" 
               name="message" 
               value={data.message}
               onChange={handleForm}/>
            </div>
          </div>
        </div>

          <div className="form-btn">
              <input type="submit" className="btn"/>
        </div>
      </form>

  
    </>
  );
}

export default Contact;
