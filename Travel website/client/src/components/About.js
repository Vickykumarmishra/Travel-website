import React from 'react'

import Contact from './Contact'
import ProvideService from './ProvideService'
import BookRide from './BookRide'
import Footer from './Footer'
import Navbar from './Navbar'
import Swal from 'sweetalert2'
export default function About() {

	function handlelprotection(e){

		if(!localStorage.getItem('login')){
		e.preventDefault()
		Swal.fire({
		  title: "You must login to acess this page",
		  showClass: {
			popup: `
			  animate__animated
			  animate__fadeInUp
			  animate__faster
			`
		  },
		  hideClass: {
			popup: `
			  animate__animated
			  animate__fadeOutDown
			  animate__faster
			`
		  }
		});
	  }
	  }
  return (
	<>
	  <Navbar></Navbar>
    <div style={{marginBottom:'0rem'}}>
      
      

	
	<section class="about">
		<div class="d-lg-flex">
			<div class="col-lg-6 banner-about">
				<h3 class="title-wthree mb-4">
					<span class="mb-1">About Us</span>We Are A Travel Agency</h3>
				<h6>"DriveDosti connects college staff and students with spare vehicle seats to those in need, offering affordable transportation solutions. Join us in fostering a community of support and accessibility."</h6>
				<p class="my-3">Embark on a voyage of discovery with our travel blog. Dive into vibrant cultures, stunning landscapes, and expert travel insights.</p>
				
				<div class="button-w3ls mt-xl-5 mt-4" style={{float:'left',margin:'0.2rem'}}>
					<a href="/BookRide" class="btn animated-button" onClick={handlelprotection}>Book your Ride</a>
				</div>

				<div class="button-w3ls mt-xl-5 mt-4" style={{float:'left',margin:'0.2rem'}}>
					<a href="/ProvideService" class="btn animated-button" onClick={handlelprotection}>Provide Service</a>
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
