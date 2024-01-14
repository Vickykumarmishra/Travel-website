import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaForm } from '../schema/schemaform';
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
  const handleLogin = async (e) => {
    e.preventDefault();


    
    const response = await fetch('https://bharatvarsh.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);

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
      Swal.fire('Logged In', 'Welcome to RideReady', 'success');
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
    <div className='container' >
      <h1 class="logo text-center">
					<a href="#">RideReady</a>
				</h1>
        <p style={{color:"red"}}><b>[After clicking on login or signup button, it may take few seconds sometimes. so please wait after clicking]</b></p>
      {/* <center>
        <form className="form" style={{marginTop:"2.5rem"}}>
          <p className="title">Login Page</p>
          <p className="message">Login now and get full access to our app.</p>
          <div className="flex">
            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required=""
                id="username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <span>Username</span>
            </label>
          </div>
          <label>
            <input
              className="input"
              type="email"
              placeholder=""
              required=""
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              className="input"
              type="password"
              placeholder=""
              required=""
              name="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </label>
          <button className="submit" onClick={handleLogin}>
            Login
          </button>
          <p className="signin">
            Don't have an account? <a href="/Signup">SignUp</a>
          </p>
        </form>
      </center> */}

      <div className='row'>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <img src="log trav.jpg" className='img-fluid'></img>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <div style={{marginBottom:"1rem"}}> <h1 style={{color:'#05b993'}}><b>LogIn</b></h1></div>

        <div class="form-floating mb-3" style={{marginTop:"1rem"}}>
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name" name="username"
  onChange={handleChange}
  value={values.username}  onBlur={handleBlur}  />
  <label for="floatingInput">User Name</label>
</div>
{errors.username && touched.username?(<p  style={{color:'red'}}className='form-error'>{errors.username}</p>):null}
          
        </div>

      </div>

      
       {/* footer */}

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
  );
}
