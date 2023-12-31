import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

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
      const payload = JSON.parse(atob(tokenParts[1]));
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
    <div >
      <h1 class="logo text-center">
					<a href="#">RideReady</a>
				</h1>
        <p style={{color:"red"}}><b>[After clicking on login or signup button, it may take few seconds sometimes. so please wait after clicking]</b></p>
      <center>
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
      </center>

      
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
