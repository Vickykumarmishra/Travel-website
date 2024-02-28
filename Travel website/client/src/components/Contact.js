import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export default function Contact() {
	const form = useRef();
	function handleform(e){
		e.preventDefault()
		let verify=document.getElementById('field1').value;
let verify2=document.getElementById('field2').value;
let verify3=document.getElementById('field3').value;
let verify4=document.getElementById('field4').value;

if(verify==''||verify2==''||verify3==''||verify4==''){
 
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: 'All details must be filled before sending',
	  
	})
  
	
   
  }
  
  else{
  
	emailjs.sendForm('service_uh16qbn','template_0p483fj',form.current,'FzQ82uEVhnavLDi3H').then((result) => {
	  console.log(result.text);
	  Swal.fire(
		'Message sent successfully to Us',
		'We will contact you soon 😊',
		'success'
	  )
  }, (error) => {  
	  console.log(error.text);
  });


	  }
document.getElementById('field1').value='';
document.getElementById('field2').value='';
document.getElementById('field3').value='';
document.getElementById('field4').value='';
	
	}
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
				<form  ref={form} target="_blank" action="#" onSubmit={handleform}>
					<div class="row">
						<div class="col-lg-6 form-group">
							<input type="text" class="form-control" placeholder="Name" name="name" required="" id="field1"/>
						</div>
						<div class="col-lg-6 form-group">
							<input type="email" class="form-control" placeholder="Email" name="useremail" required="" id="field2"/>
						</div>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Subject" name="subject" required="" id="field3"/>
					</div>
					<div class="form-group">
						<textarea name="message" class="form-control" placeholder="Message" required="" id="field4"></textarea>
					</div>
					<button type="submit" class="btn submit-button mt-md-4 mt-3">Submit</button>
				</form>
			</div>
		</div>
	</section>
	
	
    </div>
	<Footer></Footer>
	</>
  )
}
