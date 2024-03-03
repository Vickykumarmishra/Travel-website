import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Protected(props) {
    
    const {Component}=props
    const navigate=useNavigate()

    Swal.fire({
      title: "you must login to access this page",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    
    useEffect(()=>{

      if(localStorage.getItem('login')){
        console.log('abra')
     
        let login=localStorage.getItem('login');
        
        // if(!login){
        //   // !false=true=> if login has false this block will execute and redirect to login page since user has not logged
           

            
        // }
      }
      else{
        console.log('dabra')
        navigate('/Login')
      }

    
    })
  return (
    <div>
      {/* app.js m jis v component ko prootected m pass kara rahe hai, vo sab is component se hoke jayega load hote samay and us samy login key
      ka value agar false raha to redirect hoga login page par */}
      <Component/>
    </div>
  )
}
