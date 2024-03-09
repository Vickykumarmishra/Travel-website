import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function BookRide() {
  const [allImage, setAllImage] = useState(null);
  const [role, setRole] = useState('');
  const [info, setInfo] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [data,setdata]=useState([]);
  var driverphone;
  var pickup;
  var pickuptime;
  var email
  const buttonhide = () => {
 
    if(role==='user'){

    setIsButtonVisible(false);
    }
  };  


  useEffect(() => {
    var x=localStorage.getItem('role');
     if(x===null){
      const y='krishna'
      console.log("jai ho")
      setRole(y)
    //const storedRole = localStorage.getItem('role');
     }
     else{
      const storedRole = localStorage.getItem('role');
      setRole(storedRole);
     }
   
  } , []);

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

    axios.get("https://travel-website-serving.onrender.com/getter")
      .then(response => {
        if(response.ok=true){
          Swal.close()
          
        }
        console.log(response.data)
        setInfo(response.data);
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  async function handlebooking(_id){
//bookRide button par click karke current driver ka id bheje hai is function me.
    await axios.get(`https://travel-website-serving.onrender.com/getbooking/${_id}`)
/*current driver ka id fetch karke usko 'getbooking api me bhej denge and then is id k corresponding data fetch karenge then niche 
variables ko initialize karenge and current user jisne booking button par click kiya hai uska details localstorage se lenge
 then dono ka data ek separate collection me bhej denge*/
    .then(response => {
      if(response.ok=true){
       
        toast("Ride booked successfully",{
          style: {
            background: "green",
            color: "white",
          },
        })
       
           drivername=response.data.name;
           driverphone=response.data.phone;
           pickup=response.data.pickup;
           pickuptime=response.data.time;
           email=response.data.email;
           console.log("booked driver name:",drivername)
           console.log("booked driver phone no:", driverphone)
           console.log("pickup point:", pickup)
           console.log("pickup time",pickuptime)
           console.log("driver email:",email)
       
      }
      
     // console.log("data is:",data)
    })
    .catch(error => {
      console.error("Error fetching data:", error);

    });
    

    
    var username=localStorage.getItem('username');
    var useremail=localStorage.getItem('email');
    var driverid=_id.slice(0, 8)//first 8 letter only stored
    var drivername;
    
    console.log('username:',username)
    console.log("driver id:",driverid)
    
    const url="https://travel-website-serving.onrender.com/bookings";
    
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({username,useremail, driverid,drivername,driverphone,pickup,pickuptime})
    })
    .then(() => {
      console.log("Data updated successfully");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });

   
    fetch("https://travel-website-serving.onrender.com/mail",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({email})
    })
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });

  }

  const handleDelete = async (_id) => {
    if (role === 'Admin') {
      const response = await fetch(`https://travel-website-serving.onrender.com/delete/${_id}`, {
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
    <Navbar></Navbar>
    <div className='container' onLoad={ buttonhide} >

    <h1 style={{ marginBottom:"1rem",marginTop:'3rem'}}>Book Your Ride</h1>
      <div class="main-top">
        
      </div>
      
     <b> <h6 style={{color:"red",margin:'1rem',backgroundColor:'#05b993'}}> {role} mode</h6></b>
      <div className="overflow-auto">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {info.map((soln, index) => {
            const { _id, name, phone, pickup, charge, time,mode,imageUrl } = soln;
            //mode==car?console.log('car'):console.log('bike')
            return (
              <div key={_id} className="col-md-6 col-lg-4">
                
                
                <div className="card h-100" style={{ background: 'linear-gradient(135deg, #05b993, #0000)'}}>
    <div className="card-body" style={{border:'0.05rem solid green',borderRadius:'0.3rem'}}>
        <img src={imageUrl} style={{ height: "10rem", width: '10rem', borderRadius: '100%', border: '0.1rem solid grey' }} className='img-fluid'></img>
        <h5 className="card-title" styel={{color:'green'}}>Dost: {name}</h5>
        <p className="card-text" style={{color:'green'}}><b>Id: {_id.slice(0,8)}</b></p>
        <p className="card-text" style={{color:'green'}}><img src='phone-call.png' className='img-fluid' style={{height:'1.5rem'}}></img>:<b> {phone}</b></p>
        <p className="card-text" style={{color:'green'}}><b>Pickup At: {pickup}</b></p>
        <p className="card-text" style={{color:'green'}}><b>Amount: {charge}₹ </b></p>
        <p className="card-text" style={{color:'green'}}><b>Time: {time}</b></p>
        <p className="card-text" style={{color:'green'}}><b>Mode: {mode}</b></p>
        <button className='btn btn-success' style={{ margin: '0.5rem' }} onClick={() => handlebooking(_id)}>BookRide</button>
        <button className={isButtonVisible ? 'btn btn-danger' : 'hidden'} style={{ margin: '0.5rem' }} onClick={() => handleDelete(_id)} id="delete">Delete</button>
    </div>
</div>

              </div>
            );
          })}
        </div>
      </div>
      
      <ToastContainer/>
    </div>
    <Footer></Footer>
    </>
  );
}
