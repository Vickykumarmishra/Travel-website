import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Protected(props) {
    
    const {Component}=props
    const navigate=useNavigate()

 

    useEffect(()=>{

      if(localStorage.getItem('login')){
        console.log('abra')
     
        let login=localStorage.getItem('login');
       
      }
      else{
        console.log('dabra')
       
       

        navigate('/Login')

        
       

      }

      

    
    },[])
  return (
    <div>
      {/* app.js m jis v component ko prootected m pass kara rahe hai, vo sab is component se hoke jayega load hote samay and us samy login key
      ka value agar false raha to redirect hoga login page par */}
      <Component/>
    </div>
  )
}
