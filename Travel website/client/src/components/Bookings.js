import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
const Bookings = () => {
  const [booking, setBooking] = useState([]);
  var searchitem;
 
  function handlereset(){
    window.location.reload()
  }

  function handlesearch(e){
    e.preventDefault()
    searchitem=document.getElementById("searchbar").value;
    if(searchitem===''){
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "write something before searching",
        
        iconColor: "#ED7D31",
        customClass: {
          popup: 'error-modal', // Add a class for custom styling
          title: "tit",
          icon: "iconic",
          footer:'foot',
          confirmButton: 'confirm',
        },
        
        
      });
  
    }

    else {
   const filtereddata= booking.filter((current)=>{

      if(current.username.toLowerCase()===searchitem.toLowerCase()){
        return current;
      }
      
    })
    setBooking(filtereddata)

    document.getElementById('reset').style.display='block'
  
  }

  }

  async function getBookings() {
    try {
      const response = await axios.get("https://bharatvarsh.onrender.com/getbooked");
      if (response.data) {
        console.log('bookings done:-', response.data);
        setBooking(response.data);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  }

  useEffect(() => {
    getBookings();
  }, []);

  return (

    <>
    <Navbar></Navbar>
    {/* <h2>Booked Rides will show Here</h2> */}

    <div className='row'>
      <div className='col-sm-12 col-md-6 col-lg-6'>
    
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6'>

      </div>
    </div>

    <div class="container" style={{marginTop:'2rem',marginBottom:'1rem'}}>
    <form class="d-flex" role="search" onSubmit={handlesearch}>
      <input class="form-control me-2" type="search" id='searchbar'  placeholder="Search by passengerName" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit" >Search</button>
    </form>
  </div>
    
    <div className="container table-container"> {/* Step 1: Add table-container class */}

    
      <table>
        <thead>
          <tr>
            <th>Driver id</th>
            <th>Driver Name</th>
            <th>Driver phone no</th>
            <th>Passenger Name</th>
            <th>Passenger Email</th>
            <th>Pickup Point</th>
            <th>Pickup Time</th>
          </tr>
        </thead>
        <tbody>
          {
            booking.map((soln, index) => {
              const { username, drivername, driverphone, driverid, useremail, pickup, pickuptime } = soln;
              return (
                <tr key={index} style={{ color: 'green' }}>
                  <td>{driverid}</td>
                  <td>{drivername}</td>
                  <td>{driverphone}</td>
                  <td>{username}</td>
                  <td>{useremail}</td>
                  <td>{pickup}</td>
                  <td>{pickuptime}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

     <center><img id='reset' style={{display:'none',marginTop:"1rem",cursor: 'pointer' }}  src='reset icon.png' onClick={handlereset}></img></center> 
    </div>
    <Footer></Footer>
     </>
  );
};

export default Bookings;
