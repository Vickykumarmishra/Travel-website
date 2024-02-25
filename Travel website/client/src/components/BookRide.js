import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Contact from './Contact';
import Footer from './Footer';
export default function BookRide() {
  const [allImage, setAllImage] = useState(null);
  const [role, setRole] = useState('');
  const [info, setInfo] = useState([]);
 

   

 

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  useEffect(() => {

    let timerInterval;
Swal.fire({
  title: "...Loading!",
  html: "I will close in <b></b> milliseconds.",
  timer: 20000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

    axios.get("https://bharatvarsh.onrender.com/getter")
      .then(response => {
        if(response.ok=true){
          Swal.close()
          
        }
        setInfo(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function loaded(){
    // Swal.fire(
    //   'Data loaded',
    //   'Data accessed from database',
    //   'success'
    // )
  }

  const handleDelete = async (_id) => {
    if (role === 'admin') {
      const response = await fetch(`https://bharatvarsh.onrender.com/delete/${_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {

        Swal.fire('Deleted', 'Record deleted successfully', 'success');
        window.location.reload()//reload hoga page
      } else {
        Swal.fire('Error', 'Failed to delete the record', 'error');
      }
    } else {
      Swal.fire('Access Denied', 'You do not have permission to delete records', 'error');
    }
  };

  return (
    <>
    <div className='container' >
      <div class="main-top">
        <header>
          <div class="container-fluid">
            <h1 class="logo text-center">
              <a href="index.html">RideReady Available Bikes Details</a>
            </h1>
           
            <br></br>
            <div class="nav-menus">
              <ul id="menu">
                <li>
                  <input id="check02" type="checkbox" name="menu" />
                  <label for="check02"><span class="fa fa-bars" aria-hidden="true"></span></label>
                  <ul class="submenu">
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/ProvideService">Service Providers</a></li>
                    <li><a href="/BookRide" class="active">Vehicles Details</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                    <li><a href="/" style={{color:"black"}}>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>
       
      </div>
      <br></br><br></br><br></br>
      <h6 style={{color:"red",margin:'1rem'}}> {role} mode</h6>
      <div className="overflow-auto">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {info.map((soln, index) => {
            const { _id, name, phone, pickup, charge, time,imageUrl } = soln;
            return (
              <div key={_id} className="col">
                <div className="card h-100">
                 
                  <div className="card-body">

                    <img src={imageUrl} style={{height:"10rem",width:'10rem',borderRadius:'100%',border:'0.1rem solid grey'}} className='img-fluid'></img>
                    <h5 className="card-title">Driver:-{name}</h5>
                    <p className="card-text">Phone: {phone}</p>
                    <p className="card-text">Pickup Point: {pickup}</p>
                    <p className="card-text">Amount: {charge}</p>
                    <p className="card-text">Time: {time}</p>
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      
    </div>
    <Footer></Footer>
    </>
  );
}
