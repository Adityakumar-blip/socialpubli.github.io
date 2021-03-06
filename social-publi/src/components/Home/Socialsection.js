import React from 'react';
import './Socialsection.css';
import styled from "styled-components";
import img from '../image/img1.jpg';


const Socialsection = () => {
    return(
        <>
            <section>
        <div className='row'>
        <div className="social-container">
            <div className="row g-0">
            <div className="col-md-6">
            <div className="social-body">
                <h2 className="social-title">THE WORLD'S TOP INFLUENCER MARKETING AGENCY HAS BECOME<br/> ONE OF THE GLOBE'S FASTEST <br/>GROWING FULL SERVICE<br/> MARKETING FIRMS</h2>
            </div>
        </div>
            <div className="col-md-6">
                <img src={img} class="img-fluid rounded-start" alt="..."/>
            </div>
    </div>
    </div>

        </div>
    </section>
        </>
    );
};

export default Socialsection;