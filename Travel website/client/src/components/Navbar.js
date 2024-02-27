import React from 'react'

export default function Navbar() {
  return (
    <div style={{backgroundColor:'#05b993'}}>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/about"><b>Rideshare</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/About">About us</a>
        <a class="nav-link active" aria-current="page" href="/ProvideService">Provide Service</a>
        <a class="nav-link active" aria-current="page" href="/BookRide">Book Your Ride</a>
        <a class="nav-link active" aria-current="page" href='/Contact'>Contact Us</a>
        <a class="nav-link active" aria-current="page" href="/Bookings">Bookings</a>
        <a class="nav-link active" aria-current="page" href="/">Logout</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
