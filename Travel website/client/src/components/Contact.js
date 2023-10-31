import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
export default function Contact() {
	const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();
  return (
    <div>
      

      <div class="main-top">
		{/* <!-- header --> */}
		<header>
			<div class="container-fluid" >
				<h1 class="logo text-center">
					<a href="index.html">Let's Go</a>
				</h1>
				{/* <!-- menu --> */}
				<div class="nav-menus">
					<ul id="menu">
						<li>
							<input id="check02" type="checkbox" name="menu" />
							<label for="check02"><span class="fa fa-bars" aria-hidden="true"></span></label>
							<ul class="submenu">
								<li><a href="/">Home</a></li>
								<li><a href="/About">About Us</a></li>
								<li><a href="/ProvideService">Service Providers</a></li>
								<li><a href="/BookRide">Vehicles Details</a></li>
								
								<li><a href="/Gallery">Gallery</a></li>
								<li><a href="/Contact" class="active">Contact Us</a></li>
								<li> <a href="/"   style={{color:"black"}} class="btn animated-button">Logout</a></li>
							</ul>
						</li>
					</ul>
				</div>
				{/* <!-- //menu --> */}
			</div>
		</header>
		{/* <!-- //header --> */}
	</div>

	{/* <!-- contact --> */}
	<section class="contact py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="tittle text-center text-bl mt-5 mb-sm-5 mb-4">Talk to Us!</h3>
			<div class="contact-form mx-auto text-center">
				<form  action="#">
					<div class="row">
						<div class="col-lg-6 form-group">
							<input type="text" class="form-control" placeholder="Name" name="name" required=""/>
						</div>
						<div class="col-lg-6 form-group">
							<input type="email" class="form-control" placeholder="Email" name="email" required=""/>
						</div>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Subject" name="subject" required=""/>
					</div>
					<div class="form-group">
						<textarea name="message" class="form-control" placeholder="Message" required=""></textarea>
					</div>
					<button type="submit" class="btn submit-button mt-md-4 mt-3">Submit</button>
				</form>
			</div>
		</div>
	</section>
	{/* <!-- //contact -->

	<!-- copyright bottom --> */}
	<div class="copy-bottom bg-li py-2">
		<div class="container-fluid">
			<div class="d-md-flex text-center align-items-center">
				{/* <!-- footer social icons --> */}
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
				{/* <!-- //footer social icons -->
				
				
			
				{/* <!-- //move top icon --> */}
			</div>
		</div>
	</div>
	


    </div>
  )
}
