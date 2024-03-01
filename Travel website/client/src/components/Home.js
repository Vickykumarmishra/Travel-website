import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
export default function Home() {

 const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();
 const navigate=useNavigate();

 function fire(){
   
    navigate('/About')
  }
  return (
    <div style={{}}>
     
      <div class="main-top" style={{margin:'0'}}>
		{/* <!-- header --> */}
		<header>
			<div class="container-fluid "  >
				<h1 class="logo text-center"  style={{color:'white'}}>
					<b>DriveDosti</b>
				</h1>
				
				{/* <!-- //menu --> */}
			</div>
		</header>
		{/* <!-- //header -->

		<!-- banner slider --> */}
		<div id="homepage-slider" class="st-slider">
			<input type="radio" class="cs_anchor radio" name="slider" id="play1" checked="" />
			<input type="radio" class="cs_anchor radio" name="slider" id="slide1" />
			<input type="radio" class="cs_anchor radio" name="slider" id="slide2" />
			<input type="radio" class="cs_anchor radio" name="slider" id="slide3" />
			<div class="images">
				<div class="images-inner">
					<div class="image-slide">
						<div class="banner-w3ls-1">
							<div class="container">
								<div class="slider-text-w3ls">
									<h3 class="banner-wthree-text"><span class="fa fa-dot-circle-o"></span>Your Journey
										Starts Here</h3>
									<h3 class="banner-wthree-text banner-wthree-text-2"><span
											class="fa fa-dot-circle-o"></span>Explore and
										Travel</h3>
									<h3 class="banner-wthree-text banner-wthree-text-3"><span
											class="fa fa-dot-circle-o"></span>Your Best Trip</h3>
									{/* <!-- search --> */}
									<div class="search-w3layouts text-right">
										<p class="text-wh">You know where you want to go.<br/> Now find the best way to
											get there and enjoy
											it.</p>
										<form  class="search-bottom-wthree d-flex mt-3">
										<div class="button-w3ls mt-xl-5 mt-4">
					{/* <a href="#" class="btn animated-button">Login/SignUp</a> */}
					{/* {isAuthenticated?<li><a href="#" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) } style={{color:"black"}} class="btn animated-button">LogOut</a> </li>: <li> <a href="#"  onClick={() =>loginWithRedirect() } style={{color:'black',backgroundColor:"white"}} class="btn animated-button">Login/SignUp</a></li>}
					{isAuthenticated && fire()} */}
					 
					 <li> <a href="/Signup"  style={{color:'black',backgroundColor:"white"}} class="btn animated-button">Login/SignUp</a></li>

				</div>
										</form>
									</div>
									{/* <!-- //search --> */}
								</div>
							</div>
						</div>
					</div>
					<div class="image-slide">
						<div class="banner-w3ls-2">
							<div class="container">
								<div class="slider-text-w3ls">
									<h3 class="banner-wthree-text"><span class="fa fa-dot-circle-o"></span>Your Journey
										Starts Here</h3>
									<h3 class="banner-wthree-text banner-wthree-text-2"><span
											class="fa fa-dot-circle-o"></span>Explore and
										Travel</h3>
									<h3 class="banner-wthree-text banner-wthree-text-3"><span
											class="fa fa-dot-circle-o"></span>Your Best Trip</h3>
									{/* <!-- search --> */}
									<div class="search-w3layouts text-right">
										<p class="text-wh">You know where you want to go.<br/> Now find the best way to
											get there and enjoy
											it.</p>
										<form  method="post" class="search-bottom-wthree d-flex mt-3">
										<div class="button-w3ls mt-xl-5 mt-4">
					<a href="/Signup"  style={{color:'black',backgroundColor:"white"}} class="btn animated-button">Login/SignUp</a>
				</div>
										</form>
									</div>
									{/* <!-- //search --> */}
								</div>
							</div>
						</div>
					</div>
					<div class="image-slide">
						<div class="banner-w3ls-3">
							<div class="container">
								<div class="slider-text-w3ls">
									<h3 class="banner-wthree-text"><span class="fa fa-dot-circle-o"></span>Your Journey
										Starts Here</h3>
									<h3 class="banner-wthree-text banner-wthree-text-2"><span
											class="fa fa-dot-circle-o"></span>Explore and
										Travel</h3>
									<h3 class="banner-wthree-text banner-wthree-text-3"><span
											class="fa fa-dot-circle-o"></span>Your Best Trip</h3>
									{/* <!-- search --> */}
									<div class="search-w3layouts text-right">
										<p class="text-wh">You know where you want to go.<br/> Now find the best way to
											get there and enjoy
											it.</p>
										<form  method="post" class="search-bottom-wthree d-flex mt-3">
										<div class="button-w3ls mt-xl-5 mt-4">
					<a href="/Signup"  style={{color:'black',backgroundColor:"white"}} class="btn animated-button">Login/SignUp</a>
				</div>
										</form>
									</div>
									{/* <!-- //search --> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="labels">
				<div class="fake-radio">
					<label for="slide1" class="radio-btn"></label>
					<label for="slide2" class="radio-btn"></label>
					<label for="slide3" class="radio-btn"></label>
				</div>
			</div>
		</div>
		{/* <!-- //banner slider --> */}
	</div>

	{/* <!-- copyright bottom --> */}
	
	{/* <!-- //copyright bottom --> */}
    </div>
  )
}
