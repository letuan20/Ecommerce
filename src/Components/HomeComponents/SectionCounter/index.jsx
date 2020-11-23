import React from 'react';
import { Zoom } from 'react-reveal';

import bg from '../../../Assets/bg_4.jpg';

import './style.css'


const SectionCounter=()=>{
    return(
      <Zoom bottom >
        <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number">10,000</strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number">100</strong>
                      <span>Branches</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number">1,000</strong>
                      <span>Partner</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={100}>100</strong>
                      <span>Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Zoom>
    )
}
export default SectionCounter