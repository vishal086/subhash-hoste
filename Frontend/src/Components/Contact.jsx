import React, { useState } from "react";
import "../Style/Contact.css";
import axios from 'axios'
import {toast} from 'sonner'
import { useNavigate } from "react-router-dom";
import {Loader2} from 'lucide-react'
function Contact() {

  const[loading,setLoading] = useState(false);

  const navigate = useNavigate();
  const [data,setData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const handleForm = (e) => {
       const {name,value} = e.target
       setData({
            ...data,
            [name] : value
       })
  }
  const handleSubmit = async(e) =>{

    // const res = await axios.post('http://localhost:8000/contact',data);


     e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post('https://subhash-hoste-backend.onrender.com/contact', data);
      // Show success toast
    
        toast.success("Message Submitted Successfully");
        navigate('/')
        
    } catch (error) { 
      // Show error toast
      toast.error('Try After Sometime');
    }
    finally {
      setLoading(false)
    }
 
  } 
  return (
    <>
      <form className="form" id="contact" onSubmit={handleSubmit}>
        <div action="" className="form-input">
          <h2 className="contact-text">Contact Us</h2>
          <div className="form-group">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" 
              name="name" 
              value={data.name} 
              onChange={handleForm}/>
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
          {
              loading?<button className="btn"><Loader2 className="vishal"/>Please wait</button>: <button type="submit" className="btn">Submit</button>
              }
        </div>
      </form>
    </>
  );
}

export default Contact;
