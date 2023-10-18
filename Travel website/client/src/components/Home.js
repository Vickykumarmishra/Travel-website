import React from 'react'

export default function Home() {
  return (
    <div>
      
      <div class="main-top">
		{/* <!-- header --> */}
		<header>
			<div class="container-fluid"  >
				<h1 class="logo text-center">
					<a href="index.html">RideReady</a>
				</h1>
				{/* <!-- menu --> */}
				<div class="nav-menus"  style={{marginRight:'1rem'}}>
					<ul id="menu">
						<li>
							<input id="check02" type="checkbox" name="menu" />
							<label for="check02"><span class="fa fa-bars" aria-hidden="true"></span></label>
							<ul class="submenu">
								<li><a href="/" class="active">Home</a></li>
								<li><a href="/About">About Us</a></li>
								<li><a href="/ProvideService">Service Providers</a></li>
								<li><a href="/BookRide">Vehicles Details</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="/Gallery">Gallery</a></li>
								<li><a href="/Contact">Contact Us</a></li>
							</ul>
						</li>
					</ul>
				</div>
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
										<form  method="post" class="search-bottom-wthree d-flex mt-3">
										<div class="button-w3ls mt-xl-5 mt-4">
					<a href="#" class="btn animated-button">Login/SignUp</a>
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
					<a href="#" class="btn animated-button">Login/SignUp</a>
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
					<a href="#" class="btn animated-button">Login/SignUp</a>
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
	<div class="copy-bottom bg-li py-2">
		<div class="container-fluid">
			<div class="d-md-flex text-center align-items-center">
				{/* <!-- footer social icons --> */}
				<div class="social-icons-footer mb-md-0 mb-3">
					<ul class="list-unstyled">
						
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
	{/* <!-- //copyright bottom --> */}
    </div>
  )
}
