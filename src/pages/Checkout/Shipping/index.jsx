import React from 'react';

import Header from '../../../Components/CheckoutComponents/ShippingComponents/Header';
import Main from '../../../Components/CheckoutComponents/ShippingComponents/Main';
import Footer from '../../../Components/MainComponents/Footer';

const Shipping=props=>{
    return(
        <React.Fragment>
        <Header></Header>
        <Main isAuth={props.isAuth}></Main> 
        <div>
        <Footer></Footer>  
        </div> 
        </React.Fragment>
    )
}
export default Shipping