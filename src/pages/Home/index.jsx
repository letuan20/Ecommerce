import React,{useEffect} from 'react';

import SubNavagation from '../../Components/MainComponents/SubNavigation';
import Navigation from '../../Components/MainComponents/Navigation';
import SlideShow from '../../Components/HomeComponents/SlideShow';
import BlockInfor1 from '../../Components/HomeComponents/BlockInfor1';
import BlockInfor2 from '../../Components/HomeComponents/BlockInfor2';
import SectionCounter from '../../Components/HomeComponents/SectionCounter';
import Testimony from '../../Components/HomeComponents/Testimony';
import SubFooter from '../../Components/MainComponents/SubFooter';
import Footer from '../../Components/MainComponents/Footer';

import '../../Components/HomeComponents/Overall.css'

const Home = ()=> {

    useEffect(()=>{
        localStorage.removeItem('page');
    },[]);
    
          return (
            <div style={{overflow:'hidden'}}>
        <SubNavagation></SubNavagation>
        <Navigation></Navigation>
        <SlideShow></SlideShow>
        <BlockInfor1></BlockInfor1>
        <BlockInfor2></BlockInfor2>
        <SectionCounter></SectionCounter>
        <Testimony></Testimony>
        <SubFooter></SubFooter>
        <Footer></Footer>
            </div>   
        )
    }

export default Home