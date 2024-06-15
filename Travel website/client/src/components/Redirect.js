import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
export default function Redirect() {

    useEffect(()=>{
      
        Swal.fire({
            title: "Ride booked successfully",
            text: "An email has been sent to you with ride details",
            icon: "success"
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "https://travel-website-xi-drab.vercel.app/BookRide"; // Replace 'your-redirect-url' with the URL you want to redirect to
            }
          });
          

    },[])
  return (
    <div>
      
    </div>
  )
}
