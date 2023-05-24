import React from 'react';
import './../.././Styles/About.scss'
import coking from './../../images/Frame 15.png'
import coki from './../../images/Frame 16.png'
import logo from './../../images/about-logo.svg'

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about--block">
                     <div className="about--block__group">
                         <img src={logo} alt="img"/>
                         <h1>A Journey Throught
                             Cafesio Flavors</h1>
                     </div>
                        <p>Try dishes that will open up new tastes for you and delight your
                            eyes with their appearance. Here you will find a cozy atmosphere,
                            excellent service and attention to each guest. Book a table now
                            and enjoy a unique experience of taste discovery!</p>
                    </div>
                    <div className="about--images">
                        <img src={coking} alt="img"/>
                        <img src={coki} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;