import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';

export default function BookRide() {

  const { loginWithRedirect } = useAuth0();
 const { logout } = useAuth0();
 const {isAuthenticated}=useAuth0();
 const {user}=useAuth0();
  const [info, setInfo] = useState([]);
 
  useEffect(() => {

   
    axios.get("https://perfectrider.onrender.com/getter")
      .then(response => {
       // console.log(response.data);
        setInfo(response.data);
        loaded();
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  function loaded(){
    Swal.fire(
      'data loaded',
      'Data accessed from database',
      'success'
    )
  }


function deleter(id) {
  console.log(id); // Corrected from console.log({id})

  fetch(`https://perfectrider.onrender.com/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    // You can pass data as the request body if needed, for example:
    // body: JSON.stringify({ id: id })
  })
    .then((response) => {
      if (response.ok) {
        console.log('Data deleted successfully');
      } else {
        console.error('Failed to delete data');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    Swal.fire(
      'Deleted  successfully from database',
      'Refresh the page to see the effect',
      'success'
    )  
}

function loader(){

let timerInterval
Swal.fire({
  title: '......Loading',
  html: 'I will close in <b></b> milliseconds.',
  timer: 100000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}

useEffect(()=>{

  loader();
},[])

  return (
  
       
    <div>

<div class="main-top">
		
		<header>
			<div class="container-fluid">
				<h1 class="logo text-center">
					<a href="index.html">RideReady Available Bikes Details</a>
				</h1>
			
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
								
								<li><a href="Gallery" class="active">Gallery</a></li>
								<li><a href="/Contact">Contact Us</a></li>
                {isAuthenticated?<li><a href="#" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) } style={{color:'black'}} class="btn animated-button">LogOut</a> </li>: <li> <a href="#"  onClick={() =>loginWithRedirect() } style={{color:"black"}} class="btn animated-button">Login/SignUp</a></li>}
							</ul>
						</li>
					</ul>
				</div>
			
			</div>
		</header>
	
	</div>
  <br></br><br></br><br></br>

   
  
    <div className="overflow-auto">
      <table className="table table-hover table-success table-bordered caption-top">
        <caption style={{ color: 'red' }}>[Refresh if data not loaded]</caption>
        <thead style={{ border: '0.1rem solid black', backgroundColor: '#416a59', color: '#416a59' }}>
          <tr>
            <th>
              <img src="name icon.png" style={{ height: '1.2rem', width: '1.2rem', marginRight: '0.5rem', marginBottom: '0.1rem' }} />
              Biker's Name
            </th>
            <th>
              <img src="phone icon.png" style={{ height: '1.2rem', width: '1.2rem', marginRight: '0.5rem', marginBottom: '0.1rem' }} />
              Phone
            </th>
            <th>
              <img src="address icon.png" style={{ height: '1.2rem', width: '2rem', marginRight: '0.5rem', marginBottom: '0.1rem' }} />
              Pickup Point
            </th>
            <th>
              <img src="money icon.png" style={{ height: '1.2rem', width: '1.2rem', marginRight: '0.5rem', marginBottom: '0.1rem' }} />
              Amount
            </th>
            <th>
              <img src="time icon.png" style={{ height: '1.2rem', width: '1.2rem', marginRight: '0.5rem', marginBottom: '0.1rem' }} />
              Time
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody style={{ border: '0.1rem solid black', scale: '1.0' }}>
          {info.map((soln) => {
            const { _id, name, phone, pickup, charge, time } = soln;
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{pickup}</td>
                <td>{charge}</td>
                <td>{time}</td>
                <td>
                  <button  onClick={() => {deleter(_id)}} style={{ backgroundColor: '#05b993', color:'white' ,margin: '0.2rem' }}>
                    <b>Delete</b>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  



  

  );
}
