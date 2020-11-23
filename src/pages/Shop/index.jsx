import React from 'react';

import SubNavagation from '../../Components/MainComponents/SubNavigation';
import Navigation from '../../Components/MainComponents/Navigation';
import Footer from '../../Components/MainComponents/Footer';
import Main from '../../Components/ShopComponents/ListProducts';

 const Shop=(props)=>{
        return (
            <div>
                <SubNavagation isAuth={props.isAuth}></SubNavagation>
                <Navigation></Navigation>
                <main style={{backgroundColor:'#efefef'}}> 
                      <div className="container" style={{backgroundColor:'white'}}>
                    <div className="row">
                    <Main></Main>
                    </div>
                </div>    
                </main>
                <Footer></Footer>
            </div>
        )
 }
export default Shop
