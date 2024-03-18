import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Login from './Login'
export default function Navbar() {
  const navigate=useNavigate()

  function handlelprotection(e){

    if(!localStorage.getItem('login')){
    e.preventDefault()
    Swal.fire({
      title: "You must login to acess this page",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
  }
  function handlelogout(){
    if(localStorage){
    localStorage.removeItem("login");
    localStorage.removeItem("role")
    localStorage.removeItem("username");
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    }
    navigate('/Login')
  }

  useEffect(()=>{
    if(localStorage.getItem('login')){
     console.log('logout visible')  
     document.getElementById("login").style.display='none'
    }
    else{
      document.getElementById("logout").style.display = 'none';
    
 
    }
  },[])

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
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/ProvideService" onClick={handlelprotection}>Provide Service</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/BookRide" onClick={handlelprotection}>Book Your Ride</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href='/Contact'>Contact Us</motion.a>
        <motion.a whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" href="/Bookings" onClick={handlelprotection}>Bookings</motion.a>
       
        <motion.a whileHover={{textDecoration:'underline'}} id='login' class="nav-link active" aria-current="page" href="/Login" >LogIn</motion.a>
        <motion.a style={{marginRight:"0.5rem",cursor:'pointer'}} whileHover={{textDecoration:'underline'}} class="nav-link active" aria-current="page" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Profile</motion.a>
      </div>
    </div>
   
  </div>
  
</nav>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header" style={{backgroundColor:'#05b993'}}>
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel" >User Profile</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <img src="drivedosti profile.png" className='img-fluid' style={{height:'5rem'}}></img><br></br><br></br>
  <b> Username:-{localStorage.getItem("username")} </b>  <br></br>
      <p><b>Email Id:- {localStorage.getItem("email")}</b></p>
    <motion.button whileHover={{textDecoration:'underline'}} id='logout' className="btn btn-success" aria-current="page" href="#" onClick={handlelogout}>LogOut</motion.button>
  </div>
</div>
    </div>
  )
}
