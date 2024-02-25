import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import  axios from "axios";
import { useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaProvide } from '../schema/Index';
import Footer from './Footer';
const initialValues={

  name:"",
  phone:"",
  pickup:"",
  charge:"",
  time:"",
  image:"",

  }
export default function ProvideService() {
  

  function handleClick(e){

    e.preventDefault();

   let name=document.getElementById("name").value;
   let phone=document.getElementById("phone").value;
   let pickup=document.getElementById("pickup").value;
   let charge=document.getElementById("charge").value;
   let time=document.getElementById("time").value;
   var imageInput=document.getElementById("inputGroupFile04");
  
   /*imageInput is not an input element; it's the whole input field.
     To get the selected file, you should use imageInput.files[0] directly without .value. */
  var image=imageInput.files[0];
  
  const formData = new FormData();
  formData.append('name',name);
  formData.append('phone',phone);
  formData.append('pickup',pickup);
  formData.append('charge',charge);
  formData.append('time',time);
  formData.append('image',image);
  
    const url="https://bharatvarsh.onrender.com/post"
   
     if(name!==''&&phone!==''&&pickup!==''&&charge!==''&&time!==''&&image!==undefined){

      fetch(url,{
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
        document.getElementById("inputGroupFile04").value=''
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });

      Swal.fire(
        'saved',
        'Your information saved to database!',
        'success'
      )

        

       
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
    <div>
              <div class="main-top">
		{/* <!-- header --> */}
		<header>
			<div class="container-fluid">
				<h1 class="logo text-center" style={{marginBottom:"3rem"}}>
					<a href="#">RideReady</a>
				</h1>
				{/* <!-- menu --> */}
				<div class="nav-menus"  >
					<ul id="menu">
						<li>
							<input id="check02" type="checkbox" name="menu"  style={{marginRight:'1rem'}} />
							<label for="check02"><span class="fa fa-bars" aria-hidden="true" ></span></label>
							<ul class="submenu">
								{/* <li><a href="/">Home</a></li> */}
								<li><a href="/About">About Us</a></li>
								<li><a href="/ProvideService" class="active">Service Providers</a></li>
								<li><a href="/BookRide">Vehicles Details</a></li>
								<li><a href="/Contact" >Contact Us</a></li>
                <li> <a href="/"   style={{color:"black"}}>Logout</a></li>
							</ul>
						</li>
					</ul>
				</div>
				{/* <!-- //menu --> */}
			</div>
		</header>
		{/* <!-- //header --> */}
	</div>
    <div className="container" style={{marginTop:"2rem"}}>
        
       <h1 style={{fontFamily:"cursive" ,color:"white"}}><b>Service Provider's Details</b> </h1>
  <p style={{color:'darkorange'}}>[In below form bikers need to upload their bikes's images and all other details]</p>
       

       <form >
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
  <label for="floatingInput">name:</label>
</div>


        {errors.name && touched.name?(<p  style={{color:'red'}}className='form-error'>{errors.name}</p>):null}

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

<p style={{float:'left'}}>Upload your profile image</p>
<div className="input-group" style={{marginBottom:'0.5rem'}}>
        <input type="file" accept="image/*" enctype="multipart/form-data"  className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="image"  ></input>
         {/*accept="image/*" indicates that the input should accept all types of image files. */}
        {/* <button class="btn btn-outline-secondary"  style={{backgroundColor:"#33cc99",color:"white"}} type="submit" ><b>upload</b></button>   */}
        </div>
        {/* {errors.image && touched.image?(<p  style={{color:'red'}}className='form-error'>{errors.image}</p>):null} */}

      <div className='container' type='submit' style={{backgroundColor:"#33cc99",color:'white',marginTop:'0.5rem',marginBottom:"0.5rem"}} onClick={handleClick} ><b>Submit</b></div>
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


   <Footer></Footer>
	
      </div>
      </>
  )
}
/*value={values.name}: Here, values.name is used to bind the value of the input field to a variable or state property called name within the values object. 
This means that the input field's value will be controlled by the value of values.name. If values.name changes, the input field's value will update accordingly. */