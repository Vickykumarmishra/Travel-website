import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
export default function Signup() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        
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
      };
  return (
<div >


<center><div style={{marginTop:"4rem"}}>
    <form class="form" >
    <p class="title">SignUp Page </p>
    <p class="message">Signup now and get full access to our app. </p>
        <center><div class="flex" >
        <label>
            <input class="input" type="text" placeholder="" required="" name="username" value={username}
          autoComplete="username" onChange={(e) => setUsername(e.target.value)}/>
            <span>Username</span>
        </label>

       
    </div>  </center>
            
    <label>
        <input class="input" type="email" placeholder="" required="" name="email" onChange={(e) => setEmail(e.target.value)}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""  value={password}
          name="password" autoComplete="new-password" onChange={(e) => setPassword(e.target.value)}/>
        <span>Password</span>
    </label>
    
    <button class="submit" onClick={handleSignup}>Submit</button>
    <p class="signin">Already have an acount ? <a href="/Login">Signin</a> </p>
</form></div></center>

</div>
      
      
  )
}
