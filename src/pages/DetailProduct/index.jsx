import React from 'react';

import SubNavagation from '../../Components/MainComponents/SubNavigation';
import Navigation from '../../Components/MainComponents/Navigation';
import Footer from '../../Components/MainComponents/Footer';
import Infor from '../../Components/Infor';

import '../../Components/HomeComponents/Overall.css';
import './style.css';

 const DetailProduct = props => {
    return (
        <div>
            <SubNavagation isAuth={props.isAuth}></SubNavagation>
            <Navigation></Navigation>
            <Infor></Infor>
            <Footer></Footer>
        </div>
    )
}

export default DetailProduct
