import React from 'react'

import Contact from './Contact'
import ProvideService from './ProvideService'
import BookRide from './BookRide'
import Footer from './Footer'
export default function About() {

 
 

  return (
	<>
    <div style={{marginBottom:'0rem'}}>
      
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
								{/* <li><a href="/">Home</a></li> */}
								<li><a href="/About" class="active">About Us</a></li>
								<li><a href="/ProvideService">Service Providers</a></li>
								<li><a href="/BookRide">Vehicles Details</a></li>
								<li><a href="/Contact">Contact Us</a></li>
								 <li> <a href="/"   style={{color:"black"}} >Logout</a></li>
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
					<a href="/BookRide" class="btn animated-button">Book your Ride</a>
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
	
	{/* footer */}

	

	
    </div>

<Footer></Footer></>
  )
}
