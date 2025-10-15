import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Bookdetails'
import Contact from './component/Contact'
import Welcome from './component/Welcome'
import About from './component/About'
import Bookdetails from './component/Bookdetails'
const App = () =>{
 
  return (
<Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdetails" element={<Bookdetails />} />
      </Routes>
    </Router>
  )
}

export default App
