import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaForm } from '../schema/schemaform';
import Swal from 'sweetalert2';
import Footer from './Footer';
import Navbar2 from './Navbar2';
export default function Signup() {

  const myStyle={
    backgroundImage: "url(/rain-stoppers.jpg)",
    height:'100vh',
    marginTop:'-80px',
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', // This centers the image both horizontally and vertically
    
};
    const initialValues={

        username:"",
        email:"",
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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        const { username, email, password } = values;//values has all the data of form
        //const { username, email, password } = values;: Destructure the values object obtained from useFormik to get the form field values.  
        setUsername(username);
        setEmail(email);
        setPassword(password);

    if(username==''||email==''||password==''){
  
      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields must be filled!',
          
        })
      }

      else{

        let timerInterval;
        Swal.fire({
          title: "...Signing you up!",
          html: "I will close in <b></b> milliseconds.",
          timer: 80000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        const response = await fetch('https://travel-website-powx.onrender.com/signup', { // Assuming i have a signup endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
   /*This sets the content type of the request to JSON, indicating that the data being sent in the request body is in JSON format. */
          },
          body: JSON.stringify({ username,email, password }),
  /*This is the data being sent in the request body. It is the JSON string representation of an object containing username, email, and password properties. */
  /*the resulting jsonstring will look like this:- {"username":"john_doe","email":"john@example.com","password":"secretpassword"}
 */
        });
    
        if (response.ok) {

          Swal.close()
        console.log('response:' , response)
                navigate('/Login')
              
                Swal.fire(
                    'User Registered Successfully!',
                    'Now you can login!',
                    'success'
                  )
            
          // Handle successful signup, e.g., redirect to login or show a success message
        } else {
          
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This Email already used! try with different email',
                footer: '<p style="color:red"><b>check username and email carefully</b></p>'
              })
        }
      };}
  return (
    <>
    <Navbar2></Navbar2>
<div className='container' style={{marginTop:"2rem"}} >
{/* <p style={{color:'red'}}><b>IMPORTANT NOTICE</b>:- Since we are using free server and its resources are limited; so you will face a delay of 30-40 seconds in logIn and signIn process.Kindly cooperate us.</p> */}
{/* <h1 class=" text-center" style={{color:"#05b993"}}>
					<b>RideShare</b>
				</h1> */}
        
        
        {/* <p style={{color:"#05b993"}}><b>[After clicking on login or signup button, it may take few seconds sometimes. so please wait after clicking]</b></p> */}
        


<div className='row'>

  <div className='col-sm-12 col-lg-6 col-md-6'>
  <img src='signup.jpg' className='img-fluid'></img>
  </div>

  <div className='col-sm-12 col-lg-6 col-md-6'>
  <div style={{marginBottom:"1rem"}}> <h1 style={{color:'#05b993'}}><b>SignUp</b></h1></div>

  <div class="form-floating mb-3" style={{marginTop:"1rem"}}>
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name" name="username"
  onChange={handleChange}
  value={values.username}  onBlur={handleBlur}  />
  <label for="floatingInput">User Name</label>
</div>
{errors.username && touched.username?(<p  style={{color:'red'}}className='form-error'>{errors.username}</p>):null}
            <div class="form-floating mb-3" style={{}}>
  <input type="email" class="form-control email" id="floatingInput2" placeholder="name@example.com" name="email" value={values.email} onChange={handleChange}
           onBlur={handleBlur} />
  <label for="floatingInput">Email address</label>
</div>
{errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}

<div class="form-floating">
  <input type="password" class="form-control passw" id="floatingPassword" placeholder="Password"  name="password" onChange={handleChange}
          value={values.password}  onBlur={handleBlur} />
  <label for="floatingPassword">Password</label>
</div>
{errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null}

<p style={{marginBottom:"1rem",marginTop:"1rem",color:'green'}}><input type="checkbox" class="ui-checkbox"  style={{marginRight:"0.5rem"}}></input>Remember Me</p>
<button className='btn btn-primary' style={{border:"0.1rem  transparent",marginTop:"2rem",backgroundColor:"#05b993"}}  onClick={handleSignup}>SignUp</button>

<p className="signin" style={{color:'black'}}>
            Already signedUp? <a href="/Login" style={{color:"#05b993"}}><b>Login</b></a>
          </p>
  </div>

</div>

</div>
<Footer></Footer>   
</>  
  )
}
