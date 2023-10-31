import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Swal from 'sweetalert2';

export default function Login() {

    const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email,setEmail]=useState('')
const navigate=useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
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
          // You can redirect to the authenticated route here.
        } else {
          
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User does not exists!',
                footer: '<p><b>check username and password carefully</b></p>'
              })

        }
      };

  return (
    <div style={{marginTop:"4rem"}}>
     <center><form class="form">
    <p class="title">Login Page </p>
    <p class="message">Login now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required=""   value={username} name="username" autoComplete="username" onChange={(e) => setUsername(e.target.value)}/>
            <span>Username</span>
        </label>

       
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required="" name="email" onChange={(e) => setEmail(e.target.value)}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""  value={password}  name="password" autoComplete="password" onChange={(e) => setPassword(e.target.value)}/>
        <span>Password</span>
    </label>
    
    <button class="submit" onClick={handleLogin}>Login</button>
    <p class="signin">Don't have an acount ? <a href="/Signup">SignUp</a> </p>
</form></center>
    </div>
  )
}
