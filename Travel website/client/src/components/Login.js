import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { useFormik } from 'formik'
import { SchemaForm } from '../schema/schemaform';
import * as yup from "yup";
import Swal from 'sweetalert2';

export default function Login() {

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
const [email,setEmail]=useState('')
const navigate=useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
    const { username, email, password } = values;
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
        const response = await fetch('https://bharatvarsh.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email,password }),
        });
    
        if (response.ok) {
          console.log('response:' , response)
          const data = await response.json();
          localStorage.setItem('token', data.token);
          navigate('/About')
          Swal.fire(
            'Logged In',
            'Welcome to RideReady',
            'success'
          )
          // You can redirect to the authenticated route here.
        } else {
          
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User does not exists!',
                footer: '<p><b>check username and password carefully</b></p>'
              })

        }}
      };

  return (
    <div style={{marginTop:"4rem"}}>
     <center><form class="form">
    <p class="title">Login Page </p>
    <p class="message">Login now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required=""    name="username" autoComplete="username" onChange={handleChange}
            value={values.username}  onBlur={handleBlur}/>
            <span>Username</span>
        </label>

       
    </div>  
    {errors.username && touched.username?(<p  style={{color:'red'}}className='form-error'>{errors.username}</p>):null}
    <label>
        <input class="input" type="email" placeholder="" required="" name="email"  value={values.email}  onBlur={handleBlur} onChange={handleChange}/>
        <span>Email</span>
    </label> 
    {errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}
    <label>
        <input class="input" type="password" placeholder="" required=""    name="password" autoComplete="password"   value={values.password}  onBlur={handleBlur} onChange={handleChange}/>
        <span>Password</span>
    </label>
    {errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null}
    <button class="submit" onClick={handleLogin}>Login</button>
    <p class="signin">Don't have an acount ? <a href="/Signup">SignUp</a> </p>
</form></center>
    </div>
  )
}
