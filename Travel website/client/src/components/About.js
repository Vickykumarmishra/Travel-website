import React from 'react'
import Gallery from './Gallery'
import Contact from './Contact'
import ProvideService from './ProvideService'
import BookRide from './BookRide'
import { useAuth0 } from "@auth0/auth0-react";
export default function About() {

 const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();
 

  return (
    <div>
      
      <div class="main-top">
	
		<header>
			<div class="container-fluid">
				<h1 class="logo text-center">
					<a href="/">RideReady</a>
				</h1>
			
				<div class="nav-menus">
					<ul id="menu">
						<li>
							<input id="check02" type="checkbox" name="menu" />
							<label for="check02"><span class="fa fa-bars" aria-hidden="true"></span></label>
							<ul class="submenu">
								<li><a href="/">Home</a></li>
								<li><a href="/About" class="active">About Us</a></li>
								<li><a href="/ProvideService">Service Providers</a></li>
								<li><a href="/BookRide">Vehicles Details</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="/Gallery">Gallery</a></li>
								<li><a href="/Contact">Contact Us</a></li>
								{isAuthenticated?<li><a href="#" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) } class="btn animated-button" style={{color:"black"}}>LogOut</a> </li>: <li> <a href="#"  onClick={() =>loginWithRedirect() } style={{color:"black"}} class="btn animated-button">Login/SignUp</a></li>}
							</ul>
						</li>
					</ul>
				</div>
				
			</div>
		</header>
	</div>

	
	<section class="about">
		<div class="d-lg-flex">
			<div class="col-lg-6 banner-about">
				<h3 class="title-wthree mb-4">
					<span class="mb-1">About Us</span>We Are A Travel Agency</h3>
				<h6>Discover breathtaking destinations, plan your adventures, and unlock the world's beauty with our travel website. Explore our curated guides, travel tips, and hidden gems, all designed to ignite your wanderlust. Start your journey today and make unforgettable memories around the globe. Your adventure awaits!</h6>
				<p class="my-3">Embark on a voyage of discovery with our travel blog. Dive into vibrant cultures, stunning landscapes, and expert travel insights.</p>
				
				<div class="button-w3ls mt-xl-5 mt-4" style={{float:'left',margin:'0.2rem'}}>
					<a href="/BookRide" class="btn animated-button">Book Ride</a>
				</div>

				<div class="button-w3ls mt-xl-5 mt-4" style={{float:'left',margin:'0.2rem'}}>
					<a href="/ProvideService" class="btn animated-button">Provide Service</a>
				</div>
			</div>
			<div class="col-lg-6 p-lg-0 text-lg-right text-center">
				<img src="images/ab.jpg" class="img-fluid" alt=""/>
			</div>
		</div>
	</section>
	
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
