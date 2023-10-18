import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Contact from './Contact';
export default function Gallery() {
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
    loader();
  }, []);

  const getImage = async () => {
    axios
      .get("https://perfectrider.onrender.com/get-image")
      .then((response) => {
        setAllImage(response.data);

        Swal.fire(
          'data loaded',
          'Data accessed from database',
          'success'
        )
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function loader() {
    let timerInterval;
    Swal.fire({
      title: '....Loading from database!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 100000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {

       
        console.log('I was closed by the timer');
      }
    });
  }

  return (
    <div>
      {/* Your navigation header code here */}
  

	  <div class="main-top">
		
		<header>
			<div class="container-fluid">
				<h1 class="logo text-center">
					<a href="index.html">RideReady Image gallery</a>
				</h1>
			
				<div class="nav-menus">
					<ul id="menu">
						<li>
							<input id="check02" type="checkbox" name="menu" />
							<label for="check02"><span class="fa fa-bars" aria-hidden="true"></span></label>
							<ul class="submenu">
								<li><a href="/">Home</a></li>
								<li><a href="/About">About Us</a></li>
								<li><a href="tours.html">Tours</a></li>
								<li><a href="team.html">Our Agents</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="Gallery" class="active">Gallery</a></li>
								<li><a href="/Contact">Contact Us</a></li>
							</ul>
						</li>
					</ul>
				</div>
			
			</div>
		</header>
	
	</div>
{/*navigation code ends here */}

      <div className="gallery py-5">
        <div className="container-fluid py-5">
          <div className="row news-grids no-gutters text-center mt-lg-2 mt-md-5">
            {allImage === null ? (
              <p>...Loading images from the database</p>
            ) : (
              allImage.map((soln, index) => {
                const { imageUrl } = soln;
                return (
                  <div key={index} className="col-md-3 gal-img my-md-4">
                    <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                      <img
                        src={imageUrl}
                        alt="Gallery Image"
                        className="img-fluid"
                          style={{height:"20rem"}}/>
                    </a>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Your footer code here */}
      
	  	
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
  );
}
