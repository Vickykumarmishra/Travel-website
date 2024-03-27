import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from 'formik'
import * as yup from "yup";
import Footer from './Footer';
import { SchemaForm } from '../schema/schemaform';
import Navbar2 from './Navbar2';
//import Navbar from './Navbar';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  
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

  

  function handleProtection(){

  }

  const handleLogin = async (e) => {
    e.preventDefault();

    let timerInterval;
    Swal.fire({
      title: "...Logging you in!",
      html: "I will close in <b></b> milliseconds.",
      timer: 60000,
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
    
    const response = await fetch('https://drivedosti.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {

      Swal.close()
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('username',username)
      localStorage.setItem('email',email)
      localStorage.setItem('login',true)
      const token = data.token;
      const tokenParts = token.split('.');
      /*token.split('.') splits the JWT string into an array of substrings using a dot (.) as the delimiter.
       JWTs typically have three parts: header, payload, and signature, separated by dots. */
      const payload = JSON.parse(atob(tokenParts[1]));
      /*tokenParts[1] represents the second part of the JWT, which is the payload encoded in base64. */
/*The parse method in JavaScript is often used with JSON data. It parses a JSON string and converts it into a JavaScript object. */
      const role = payload.role;
      localStorage.setItem('role', role);

      navigate('/About');
      Swal.fire('Logged In', 'Welcome to DriveDosti', 'success');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User does not exist!',
        footer: '<p><b>Check your username and password carefully</b></p>',
      });
    }
  };

  return (

    <div  onLoad={handleProtection} >
    <Navbar2></Navbar2>
    <div className='container' style={{marginTop:"2rem"}}>
    {/* <p style={{color:'red'}}><b>IMPORTANT NOTICE</b>:- Since we are using free server and its resources are limited; so you will face a delay of 30-40 seconds in logIn and signIn process.Kindly cooperate us.</p> */}
    {/* <h1 class=" text-center" style={{color:"#05b993"}}>
					<b>RideShare</b>
				</h1> */}
        {/* <p style={{color:"#05b993"}}><b>[After clicking on login or signup button, it may take few seconds sometimes. so please wait after clicking]</b></p> */}
     

      <div className='row'>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <img src="log trav.jpg" className='img-fluid'></img>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <div style={{marginBottom:"1rem"}}> <h1 style={{color:'#05b993'}}><b>LogIn</b></h1></div>

        <div class="form-floating mb-3" style={{marginTop:"1rem"}}>
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name" name="username"
 onChange={(e) => {
  handleChange(e);
  setUsername(e.target.value);
}}
  value={values.username}  onBlur={handleBlur}  />
  <label for="floatingInput">User Name</label>
</div>
{errors.username && touched.username?(<p  style={{color:'red'}}className='form-error'>{errors.username}</p>):null}
          
<div class="form-floating mb-3" style={{}}>
  <input type="email" class="form-control email" id="floatingInput2" placeholder="name@example.com" name="email" value={values.email}  onChange={(e) => {
  handleChange(e);
  setEmail(e.target.value);
}}
           onBlur={handleBlur} />
  <label for="floatingInput">Email address</label>
</div>
{errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}

<div class="form-floating">
  <input type="password" class="form-control passw" id="floatingPassword" placeholder="Password"  name="password"  onChange={(e) => {
  handleChange(e);
  setPassword(e.target.value);
}}
          value={values.password}  onBlur={handleBlur} />
  <label for="floatingPassword">Password</label>
</div>
{errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null}

<p style={{marginBottom:"1rem",marginTop:"1rem",color:'green'}}><input type="checkbox" class="ui-checkbox"  style={{marginRight:"0.5rem"}}></input>Remember Me</p>
<button className='btn btn-primary' style={{border:"0.1rem  transparent",marginTop:"2rem",backgroundColor:"#05b993"}}  onClick={handleLogin}>Login</button>

<p className="signin" style={{color:'black'}}>
Don't have an account? <a href="/Signup" style={{color:"#05b993"}}>SignUp</a>
          </p>
        </div>

      </div>

      
       {/* footer */}

       
    </div> 
    <Footer></Footer> </div>
  );
}
