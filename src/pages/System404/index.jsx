import React,{useEffect} from 'react';

import SubNavagation from '../../Components/MainComponents/SubNavigation';
import Navigation from '../../Components/MainComponents/Navigation';
import Footer from '../../Components/MainComponents/Footer';

import errorImage from '../../Assets/404.jpg';

import '../../Components/HomeComponents/Overall.css'

const ErrorPage = ()=> {
        useEffect(()=>{
            localStorage.removeItem('page');
        },[])
        return (
            <>
            <SubNavagation />
            <Navigation />
            <img src={errorImage} alt="errorImage" style={{width:'1000px',margin:'auto',display:'block',padding:'2rem 0rem'}} />
           <Footer />
           </>
        )
    }

export default ErrorPage