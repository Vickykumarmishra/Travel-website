import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import  axios from "axios";
import { useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaProvide } from '../schema/Index';
const initialValues={

  name:"",
  phone:"",
  pickup:"",
  charge:"",
  time:"",
  }
export default function ProvideService() {
  
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [pickup,setPickup]=useState("");
  const [charge,setCharge]=useState("");
  const [time, setTime]=useState("");
  

  function handleClick(e){

    e.preventDefault();

   let names=document.getElementById("name").value;
   let phones=document.getElementById("phone").value;
   let pickups=document.getElementById("pickup").value;
   let charges=document.getElementById("charge").value;
   let timings=document.getElementById("time").value;

   const {name,phone,pickup,charge,time}=values;

    setName(names);
    setPhone(phones);
    setPickup(pickups);
    setCharge(charges);
    setTime(timings);
  
    const url="https://bharatvarsh.onrender.com/post"
   
     if(name!==''&&phone!==''&&pickup!==''&&charge!==''&&time!==''){

      fetch(url,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({name,phone,pickup,charge,time}),
      })
      .then(() => {
        console.log("Data updated successfully");
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

    const [image,setImage]=useState(null)  
  
    const submitImage = async (e) => {
      e.preventDefault();
   var x= document.getElementById("inputGroupFile04").value;

     

  if(x==''){

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Upload the image of your bike',
      
    })

  }

else{  
      
  let timerInterval
  Swal.fire({
    title: '....Uploading Image to database',
    html: 'I will close in <b></b> milliseconds.',
    timer: 100000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
  
  const formData = new FormData();
  formData.append("image", image);
   /*const formData  = new FormData();: Here, a new instance of the FormData object is created.FormData is a built-in
  JavaScript object that is used to construct a set of key/value pairs representing form fields and their values, which can then be sent to the server.
  formData.append("image", image);: This line appends data to the formData object. It adds a field named "image" and associates it with the image variable. 
  image presumably contains the file that you want to upload. */
  
  try {
    const result = await axios.post(
      "https://bharatvarsh.onrender.com/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    Swal.fire(
      'saved',
      'image successfully saved to database!',
      'success'
    );
  } catch (error) {
    // Handle the error here, you can log it or display an error message to the user
    console.error('An error occurred:', error);
    // You can also show an error message to the user, for example using Swal
    Swal.fire(
      'Error',
      'An error occurred while saving the image.',
      'error'
    );
  }

}
      
    };
   
    const onInputChange = (e) => {
      //koi v naya file upload karenge ,to vo ek input chnage event hoga and that will trigger this function.
      //console.log(e.target.files[0]);
      setImage(e.target.files[0]);
    /*We'll also need to define a JavaScript function that gets triggered when a file is selected.
    This function typically uses the onChange event handler on the file input element.
    Inside this function, you can access the selected file using e.target.files[0],where e is the event object. */
    };
 
const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();
  return (
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
								
								<li><a href="/Gallery">Gallery</a></li>
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

      <div className='container' type='submit' style={{backgroundColor:"#33cc99",color:'white',marginTop:'0.5rem',marginBottom:"0.5rem"}} onClick={handleClick} ><b>Submit</b></div>
      </form>
      
    <center>
      
    <div className='container text-center'>

<form onSubmit={submitImage} className='container'>
<div className="input-group" style={{marginBottom:'0.5rem'}}>
        <input type="file" accept="image/*" enctype="multipart/form-data" onChange={onInputChange} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="image"></input>
         {/*accept="image/*" indicates that the input should accept all types of image files. */}
        <button class="btn btn-outline-secondary"  style={{backgroundColor:"#33cc99",color:"white"}} type="submit" ><b>upload</b></button>  </div>
      </form>
    
    </div>
      </center>  
          <div>
              
          </div>
        
       
    </div>


    <div class="copy-bottom bg-li py-2">
		<div class="container-fluid">
			<div class="d-md-flex text-center align-items-center">
				
				<div class="social-icons-footer mb-md-0 mb-3">
					<ul class="list-unstyled">
						<li>
							<a href="#">
								<span class="fa fa-facebook"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="fa fa-twitter"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="fa fa-google-plus"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="fa fa-instagram"></span>
							</a>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
	
      </div>

  )
}
/*value={values.name}: Here, values.name is used to bind the value of the input field to a variable or state property called name within the values object. 
This means that the input field's value will be controlled by the value of values.name. If values.name changes, the input field's value will update accordingly. */