import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Navbar2() {
  const navigate=useNavigate()
  var x="not logged";
  function handlelogout(){
    localStorage.setItem("login",false);
    localStorage.setItem("role",x)
    localStorage.removeItem("username");
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    navigate('/Login')
  }

  
 
  return (
    <div style={{backgroundColor:'#05b993'}}>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/about"><b>DriveDosti</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/About">About us</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/ProvideService">Provide Service</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/BookRide" >Book Your Ride</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href='/Contact'>Contact Us</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/Bookings">Bookings</motion.a>
        {/* <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="#" onClick={handlelogout}>Logout</motion.a> */}
      </div>
    </div>

  </div>
</nav>
    </div>
  )
}
