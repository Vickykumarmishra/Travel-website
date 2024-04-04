import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Login from './Login'
import { SchemaForm } from '../schema/schemaform';
import { useFormik } from 'formik'
import * as yup from "yup";
export default function Navbar() {

  const initialValues={

    password:"",
    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:initialValues,
      validationSchema:SchemaForm,
      onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
      }
      })

  const navigate=useNavigate()
  function handlePassword(){
   document.getElementById("newpassword").style.display="block"
   document.getElementById("passwordchange").style.display="block"
   document.getElementById("oldpassword").style.display="block"
  }

  
  async function newpassword(e) {
    e.preventDefault()
    var oldpass=document.getElementById("oldpassword").value;
    var nayapasword=document.getElementById("newpassword").value
    var nayapaswordlength=nayapasword.length

    //oldpass!==nayapasword&&oldpass===localStorage.getItem('passw')&&oldpass!==''&&nayapasword!==''&&nayapaswordlength<6

     if(oldpass===''||nayapasword===''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Both fields are required",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    else if(oldpass!==localStorage.getItem('passw')){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter correct old password",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    else if(nayapaswordlength<6){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password must be of atleast 6 characters",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    else if(oldpass===nayapasword){

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Old and new passwords cannot be same!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });

    }
    else {

        var userid = localStorage.getItem('currId');
        console.log("current id", userid);
        var newpass = document.getElementById("newpassword").value;
        console.log(newpass);

        const response = await fetch('https://travel-website-powx.onrender.com/password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newpass, userid }),
        });

        if (response.ok) {
            Swal.fire(
                'Saved',
                'Password updated successfully',
                'Login with new password',
                'success',
                
            );
            navigate('/Login')
        } 
     
  }
  
}


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
    localStorage.removeItem('currId')
    localStorage.removeItem("passw")
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

      <Link onClick={handlePassword} style={{color:"#05b993"}}>Click to change password</Link><br></br><br></br>
      <center><input type="text" id="oldpassword" placeholder='Enter Old password'    style={{display:"none",marginBottom:"1rem"}} ></input></center>
      
      <center><input type="text" id="newpassword" placeholder='Enter new password'  onChange={(e) => {handleChange(e);}} name="password"  value={values.password}  onBlur={handleBlur} style={{display:"none",marginBottom:"1rem"}}></input></center>
      {/* {errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null} */}
      <center><motion.button  type="submit" id='passwordchange'  aria-current="page" href="#" onClick={newpassword} style={{display:"none",marginBottom:"1rem",backgroundColor:"#05b993",color:"white",borderColor:'transparent'}}>Click to update</motion.button></center>
    <motion.button  id='logout' className="btn btn-success" aria-current="page" style={{width:"100%"}} href="#" onClick={handlelogout}>LogOut</motion.button>
  </div>
</div>
    </div>
  )
}
