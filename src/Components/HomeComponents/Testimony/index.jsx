import React from 'react';

import { Zoom } from 'react-reveal';

import image1 from '../../../Assets/person_1.jpg';
import image2 from '../../../Assets/person_2.jpg';
import image3 from '../../../Assets/person_3.jpg';
import image4 from '../../../Assets/person_4.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import CarouselComponent from './CarouselComponent';

import './style.css'

  const Testimony =()=>{
    return(
      <Zoom bottom >
        <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section">
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{overflowX:'hidden'}}>
                <OwlCarousel 
                    className="owl-theme"
                    loop
                    nav
                    
                >
                    <CarouselComponent imgSrc={image1}></CarouselComponent>
                    <CarouselComponent imgSrc={image2}></CarouselComponent>
                    <CarouselComponent imgSrc={image3}></CarouselComponent>
                    <CarouselComponent imgSrc={image4}></CarouselComponent>
                </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      </Zoom>
    )   
}
export default Testimony