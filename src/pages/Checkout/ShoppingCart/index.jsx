import React from 'react';

import SubNavagation from '../../../Components/MainComponents/SubNavigation';
import Navigation from '../../../Components/MainComponents/Navigation';
import Footer from '../../../Components/MainComponents/Footer';
import Cart from '../../../Components/CheckoutComponents/ShoppingCartComponents';

const ShoppingCart=props=>{
    return(
        <div style={{overflow:'hidden'}}>
            <SubNavagation isAuth={props.isAuth}/>
            <Navigation/>
            <Cart isAuth={props.isAuth}/>
            <Footer/>
        </div>
    )
}
export default ShoppingCart