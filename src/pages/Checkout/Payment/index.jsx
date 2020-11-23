import React from 'react';

import Header from '../../../Components/CheckoutComponents/PaymentComponents/Header';
import Footer from '../../../Components/MainComponents/Footer';
import Shipping from '../../../Components/CheckoutComponents/PaymentComponents/Main';

const Payment=props=>{
    return(
        <React.Fragment>
        <Header></Header>
        <Shipping isAuth={props.isAuth}></Shipping>
        <Footer ></Footer>   
        </React.Fragment>
    )
}
export default Payment