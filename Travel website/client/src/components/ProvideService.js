import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import  axios from "axios";
import { useRef } from 'react';
import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaProvide } from '../schema/Index';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialValues={
  name:"",
  phone:"",
  pickup:"",
  charge:"",
  time:"",
  image:"",
  }

export default function ProvideService() {
var m;
const [mode,setMode]=useState('');
const navigate=useNavigate()
function handlemode(m){
  setMode(m)
}


 async function handleClick(e){

    e.preventDefault();

   let name=document.getElementById("name").value;
   let phone=document.getElementById("phone").value;
   let pickup=document.getElementById("pickup").value;
   let charge=document.getElementById("charge").value;
   let time=document.getElementById("time").value;
   let date=document.getElementById("date").value;
   let email=document.getElementById("email").value;
   let vehicle=mode;
   var imageInput=document.getElementById("inputGroupFile04");
  console.log('mode:',mode)
   /*imageInput is not an input element; it's the whole input field.
     To get the selected file, you should use imageInput.files[0] directly without .value. */
  var image=imageInput.files[0];
  
  const formData = new FormData();
  formData.append('name',name);
  formData.append('email',email);
  formData.append('phone',phone);
  formData.append('pickup',pickup);
  formData.append('charge',charge);
  formData.append('time',time);
  formData.append('image',image);
  formData.append('mode',vehicle)
  formData.append('date',date)
 
  var currentUser=localStorage.getItem("username")
  var currentUserEmail=localStorage.getItem("email")
    const url="https://travel-website-serving.onrender.com/post"
   
     if(name!==''&&phone!==''&&pickup!==''&&charge!==''&&time!==''&&image!==undefined&&vehicle!==''&&date!==''&&email!==''){

      if(name!==currentUser||email!==currentUserEmail){
        toast("your name or email not matching",{
          style: {
            background: "red",
            color: "white",
          },
        })
      }
      else{
     await fetch(url,{
        method:'POST',
       
        body:formData,
        headers:{},
      })
      .then(() => {
        console.log("Data updated successfully");
        document.getElementById("name").value=''
        document.getElementById("phone").value=''
        document.getElementById("pickup").value=''
        document.getElementById("charge").value=''
        document.getElementById("time").value=''
        document.getElementById("email").value=''
        document.getElementById("inputGroupFile04").value=''
        //setMode('')
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });

      Swal.fire(
        'saved',
        'Your information saved to database!',
        'success'
      )
    // window.open('https://buy.stripe.com/test_5kAdSbgBb4NjdwcdQQ')
        
      }
       
    }

   else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All field are required",
        footer: 'you must fill all details before submitting',
        iconColor: "#ED7D31",
        customClass: {
          popup: 'error-modal', // Add a class for custom styling
          title: "tit",
          icon: "iconic",
          footer:'foot',
          confirmButton: 'confirm',
        },
        
        
      });
  
    handleSubmit();
   }

   
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:SchemaProvide,
    onSubmit:(values,action)=>{
     
      action.resetForm();
    }
    
    })

      
 
  return (
    <>
    <Navbar></Navbar>

   
    <div>
    <h1 style={{ marginBottom:"1rem",marginTop:'3rem'}}>Provide Your Service!</h1>
              <div class="main-top">
	
	</div>
    <div className="container" style={{marginTop:"2rem"}}>
        
     
       

       <form >
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
  <label for="floatingInput">name:</label>
</div>


        {errors.name && touched.name?(<p  style={{color:'red'}}className='form-error'>{errors.name}</p>):null}

        <div className="form-floating mb-3">
  <input type="text" className="form-control" id="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
  <label for="floatingInput">Email:</label>
</div>
{errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="phone" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
  <label for="floatingInput">Phone:</label>
</div>
{errors.phone && touched.phone?(<p  style={{color:'red'}}className='form-error'>{errors.phone}</p>):null}
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="pickup" name='pickup' value={values.pickup} onChange={handleChange} onBlur={handleBlur}  />
  <label for="floatingInput">Pick up point:</label>
</div>
{errors.pickup && touched.pickup?(<p  style={{color:'red'}}className='form-error'>{errors.pickup}</p>):null}
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" className="form-control" id="charge"  name='charge' value={values.charge} onChange={handleChange} onBlur={handleBlur} />
      <label for="floatingInputGrid">Enter the Amount you will charge:</label>
    </div>
    {errors.charge && touched.charge?(<p  style={{color:'red'}}className='form-error'>{errors.charge}</p>):null}
  </div>
  <div className="col-md">
  <div className="form-floating">
      <input type="text" className="form-control" id="time" name='time'  value={values.time} onChange={handleChange} onBlur={handleBlur} />
      <label for="floatingInputGrid">Pick up Timing:</label>
    </div>
    {errors.time && touched.time?(<p  style={{color:'red'}}className='form-error'>{errors.time}</p>):null}
  </div>
</div>

<br></br>



{/* radio buttons */}
<div className='row' style={{marginBottom:'1rem'}}>

  <div className='col-sm-12 col-lg-6 col-md-6' >
    <label>Date:-</label>
  <input type='date' id='date'></input>
  </div>

  <div className='col-sm-12 col-lg-6 col-md-6' >

  <div class="form-check form-check-inline">
  <input  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={()=>{handlemode('Car')}} />
  <label class="form-check-label" for="inlineRadio1">I have Car</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={()=>{handlemode('Bike')}}/>
  <label class="form-check-label" for="inlineRadio2">I have Bike</label>
</div>

  </div>
</div>





<p style={{float:'left'}}>Upload your profile image</p>
<div className="input-group" style={{marginBottom:'0.5rem'}}>
        <input type="file" accept="image/*" enctype="multipart/form-data"  className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="image"  ></input>
         {/*accept="image/*" indicates that the input should accept all types of image files. */}
        {/* <button class="btn btn-outline-secondary"  style={{backgroundColor:"#33cc99",color:"white"}} type="submit" ><b>upload</b></button>   */}
        </div>
        {/* {errors.image && touched.image?(<p  style={{color:'red'}}className='form-error'>{errors.image}</p>):null} */}

      <div className='container' type='submit' style={{backgroundColor:"#33cc99",color:'white',marginTop:'1rem',marginBottom:"1rem",padding:"0.5rem"}} onClick={handleClick} ><b>Submit</b></div>

      </form>
      
    <center>
      
    <div className='container text-center'>

{/* <form onSubmit={submitImage} className='container'> */}

      {/* </form> */}
    
    </div>
      </center>  
          <div>
              
          </div>     
       
    </div>
    <ToastContainer/>
   <Footer></Footer>
	
      </div>
      </>
  )
}
/*value={values.name}: Here, values.name is used to bind the value of the input field to a variable or state property called name within the values object. 
This means that the input field's value will be controlled by the value of values.name. If values.name changes, the input field's value will update accordingly. */