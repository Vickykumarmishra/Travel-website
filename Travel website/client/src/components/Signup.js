import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaForm } from '../schema/schemaform';
import Swal from 'sweetalert2';
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
        const response = await fetch('https://bharatvarsh.onrender.com/signup', { // Assuming you have a signup endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username,email, password }),
        });
    
        if (response.ok) {
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
                text: 'User Already exists!',
                footer: '<p style="color:red"><b>check username and password carefully</b></p>'
              })
        }
      };}
  return (
<div >

<h1 class="logo text-center">
					<a href="#">RideReady</a>
				</h1>
        
        <p style={{color:"red"}}><b>[After clicking on login or signup button, it may take few seconds sometimes. so please wait after clicking]</b></p>
        
<center><div style={{marginTop:"2.5rem"}}>
    <form class="form" onSubmit={handleSubmit}   >
    <p class="title">SignUp Page </p>
    <p class="message">Signup now and get full access to our app. </p>
        <center><div class="flex" >
        <label>
            <input class="input" type="text" placeholder="" required="" name="username" 
          autoComplete="username" onChange={handleChange}
          value={values.username}  onBlur={handleBlur} />
            <span>Username</span>
        </label>
         
    </div> 
   
        {errors.username && touched.username?(<p  style={{color:'red'}}className='form-error'>{errors.username}</p>):null}
     </center>
            
    <label>
        <input class="input" type="email" placeholder="" required="" name="email" value={values.email}  onBlur={handleBlur} onChange={handleChange}/>
        <span>Email</span>
    </label> 
    {errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}
    <label>
        <input class="input" type="password" placeholder="" required=""  
          name="password" autoComplete="new-password" onChange={handleChange}
          value={values.password}  onBlur={handleBlur} />
        <span>Password</span>
    </label>

        {errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null}
    <button class="submit" type="submit" onClick={handleSignup}>Submit</button>
    <p class="signin">Already have an acount ? <a href="/Login">Signin</a> </p>
</form></div></center>

{/* footer starts */}

<div class="copy-bottom bg-li py-2" style={{}}>
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
	
  {/* footer ends */}
</div>
      
      
  )
}
