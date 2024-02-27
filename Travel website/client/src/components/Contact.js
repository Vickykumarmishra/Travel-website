import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
export default function Contact() {
	
  return (
	<>
	<Navbar></Navbar>
    <div style={{marginBottom:'0rem'}}>
      <div class="main-top">
		
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
