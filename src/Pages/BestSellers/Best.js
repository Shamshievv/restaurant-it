import React from 'react';
import vektor from './../../images/Vector 2.svg'
import line from './../../images/Line 4.svg'
import bes from './../../images/Best log.svg'
import frem19 from './../../images/Frame 19.png'
import frem20 from './../../images/Frame 20.png'
import Slider from "react-slick";

const Best = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <div id="best">
            <div className="container">
                <div className="best">
                    <div className="best--block">
                        <div className="best--block__group">
                            <div className="best--block__group--img">
                                <img src={vektor} alt="img"/>
                                <img src={line} alt="img"/>
                            </div>
                            <img className="best--block__group--image" src={bes} alt="img"/>
                        </div>
                        <h1>You Only Reserve
                            Exception</h1>
                        <p>Each rrrrrrr location has a menu that`s curated just for them.
                            See what new at your Cafesio and You`ll find Cafesio
                            Covent Carden moments.</p>
                    </div>
                    <div className="best--slider">
                        <Slider {...settings}>
                            {/*<div className="best--image">*/}
                            <div>
                                <img className="best--img1" src={frem19} alt="img"/>
                            </div>
                            <div>
                                <img className="best--img2" src={frem20} alt="img"/>
                            </div>
                            <div>
                                <img className="best--img2" src={frem20} alt="img"/>
                            </div>
                            <div>
                                <img className="best--img2" src={frem20} alt="img"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Best;