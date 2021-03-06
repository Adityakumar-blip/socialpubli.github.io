import React from 'react';
import c1 from '../image/logo1.png';
import c2 from '../image/logo2.png';
import c3 from '../image/logo3.png';
import c4 from '../image/logo4.png';
import './Clients.css';

const Clients = () => {
  return (
    <>
          <section id="clients" class="section-bg">
            <div className="container">
              <div className="section-header">
                <h3>Our CLients</h3>
                <p>Meet our happy clients</p>
              </div>
              <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c1} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c2} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c3} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c4} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c1} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c2} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c3} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo"><img src={c4} alt="logo1" className="client1"/></div>
                </div>
                </div>
            </div>
          </section>
    </>
  );
};

export default Clients;
