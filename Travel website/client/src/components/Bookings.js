import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [filteredBooking, setFilteredBooking] = useState([]); // Add filteredBooking state
  var searchitem;

  function handlereset() {
    window.location.reload();
  }

  function handlesearch(e) {
    e.preventDefault();
    searchitem = document.getElementById('searchbar').value;
    if (searchitem === '') {
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Write something before searching',
      //   iconColor: '#ED7D31',
      //   customClass: {
      //     popup: 'error-modal', // Add a class for custom styling
      //     title: 'tit',
      //     icon: 'iconic',
      //     footer: 'foot',
      //     confirmButton: 'confirm',
      //   },
      // });
    } else {
      const filtereddata = booking.filter((current) => {
        // Filter based on multiple fields
        if (//include =>string ke andar  agar uska kuch hissa v match kar gaya to true return hoga.
          current.username.toLowerCase().includes(searchitem.toLowerCase()) ||
         // current.driverid.toLowerCase().includes(searchitem.toLowerCase()) ||
          current.drivername.toLowerCase().includes(searchitem.toLowerCase()) ||
          current.pickup.toLowerCase().includes(searchitem.toLowerCase())
          //current.pickuptime.toLowerCase().includes(searchitem.toLowerCase())||
          //current.useremail.toLowerCase().includes(searchitem.toLowerCase())
        ) {
          return current;
        }
      });
      setFilteredBooking(filtereddata); // Update filteredBooking state
      document.getElementById('reset').style.display = 'block';
    }
  }

  async function getBookings() {
    try {
      const response = await axios.get('https://travel-website-serving.onrender.com/getbooked');
      if (response.data) {
        console.log('bookings done:-', response.data);
        setBooking(response.data);
        setFilteredBooking(response.data); // Initialize filteredBooking with all bookings
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
      <Navbar />
      <div className='container' style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        <h1 style={{ marginBottom: '1rem', marginTop: '3rem' }}>Booking Details</h1>
        <form class='d-flex' role='search' onChange={handlesearch}>
          <input class='form-control me-2' type='search' id='searchbar' placeholder='Search:-Name/pickup point' aria-label='Search' />
          <button class='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
      </div>

      <div className='container table-container'>
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
            {filteredBooking.map((soln, index) => {
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
            })}
          </tbody>
        </table>
      </div>
      <center>
        <img id='reset' style={{ display: 'none', marginTop: '1rem', cursor: 'pointer' }} src='reset icon.png' onClick={handlereset} alt='Reset Icon' />
      </center>
      <Footer />
    </>
  );
};

export default Bookings;
