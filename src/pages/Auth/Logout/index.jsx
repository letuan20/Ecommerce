import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const Logout=()=>{
   const logoutHandler = () => {
     localStorage.removeItem('token');
     localStorage.removeItem('expiryDate');
     localStorage.removeItem('userId');
     localStorage.removeItem('page');
     localStorage.removeItem('userName');
     localStorage.removeItem('isAuth')
     window.location.reload(false)
   };
   useEffect(()=>{
        logoutHandler()
   },[])   
        return <Redirect to="/" />
    
}
export default Logout

