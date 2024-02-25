import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Contact from './Contact';

export default function BookRide() {
  const [allImage, setAllImage] = useState(null);
  const [role, setRole] = useState('');
  const [info, setInfo] = useState([]);
 
  useEffect(() => {
    getImage();
    loader();
  }, []);

  const getImage = async () => {
    axios
      .get("https://bharatvarsh.onrender.com/get-image")
      .then((response) => {
        setAllImage(response.data);

        Swal.fire(
          'Data loaded',
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
      title: 'Loading from database',
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
        console.log('Closed by the timer');
      }
    });
  }

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  useEffect(() => {
    axios.get("https://bharatvarsh.onrender.com/getter")
      .then(response => {
        setInfo(response.data);
        loaded();
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function loaded(){
    Swal.fire(
      'Data loaded',
      'Data accessed from database',
      'success'
    )
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
      } else {
        Swal.fire('Error', 'Failed to delete the record', 'error');
      }
    } else {
      Swal.fire('Access Denied', 'You do not have permission to delete records', 'error');
    }
  };

  return (
    <div>
      <div class="main-top">
        <header>
          <div class="container-fluid">
            <h1 class="logo text-center">
              <a href="index.html">RideReady Available Bikes Details</a>
            </h1>
            <h6 style={{color:"red",margin:'1rem'}}> {role} mode</h6>
            <div class="nav-menus">
              <ul id="menu">
                <li>
                  <input id="check02" type="checkbox" name="menu" />
                  <label for="check02"><span class="fa fa-bars" aria-hidden="true"></span></label>
                  <ul class="submenu">
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/ProvideService">Service Providers</a></li>
                    <li><a href="/BookRide" class="active">Vehicles Details</a></li>
                    <li><a href="Gallery">Gallery</a></li>
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
      <div className="overflow-auto">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {info.map((soln, index) => {
            const { _id, name, phone, pickup, charge, time } = soln;
            return (
              <div key={_id} className="col">
                <div className="card h-100">
                  {allImage && allImage[index] && (
                    <img src={allImage[index].imageUrl} className="card-img-top" alt="..." />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
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
      <div class="copy-bottom bg-li py-2">
        <div class="container-fluid">
          <div class="d-md-flex text-center align-items-center">
            <div class="social-icons-footer mb-md-0 mb-3">
              <ul class="list-unstyled">
                <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                <li><a href="#"><span class="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
