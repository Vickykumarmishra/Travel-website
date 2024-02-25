import React from 'react'
import Footer from './Footer';
export default function Contact() {
	
  return (
	<>
    <div style={{marginBottom:'0rem'}}>
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
								{/* <li><a href="/">Home</a></li> */}
								<li><a href="/About">About Us</a></li>
								<li><a href="/ProvideService">Service Providers</a></li>
								<li><a href="/BookRide">Vehicles Details</a></li>
								<li><a href="/Contact" class="active">Contact Us</a></li>
								<li> <a href="/"   style={{color:"black"}} >Logout</a></li>
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
	
    </div>
	<Footer></Footer>
	</>
  )
}
