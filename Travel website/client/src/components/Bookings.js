import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Navbar from './Navbar';
const Bookings = () => {
  const [booking, setBooking] = useState([]);

  async function getBookings() {
    try {
      const response = await axios.get("http://localhost:8000/getbooked");
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
    <h2>Booked Rides will show Here</h2>
    
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
    </div>
    <Footer></Footer>
     </>
  );
};

export default Bookings;
