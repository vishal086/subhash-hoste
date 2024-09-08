import React, { useState } from 'react'
import './Style/App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services' 
import RegisterComplaint from './Components/RegisterComplaint'

function App() {
  const [name ,setName] = useState("")
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/services' element = {<Services/>} />
            <Route path='/complaint' element = {<RegisterComplaint/>} />
            <Route path='/contact' element = {<Contact/>} />
         </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
