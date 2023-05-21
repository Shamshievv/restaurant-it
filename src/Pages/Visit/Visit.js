import React from 'react';

import wave from "../../images/hero-wave.svg"
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
import {MdOutlineMailOutline} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Visit = () => {
    return (
        <div id="visit">
            <div className="container">
                <div className="visit">

                    <div className="visit--title">
                        <img src={wave} alt=""/>
                        <span className="visit--title__sub">Restaurant</span>
                        <h2>Join Us  for  <br/>
                            Happy Hours</h2>
                        <p className="visit--title__exs">
                            <span> Your neighborhood</span>
                            <br/>
                            <p> 225$.Lake Ave.Suite 1150 <br/>
                                Pasadena,CA 911101</p>
                        </p>
                        <p style={{paddingBottom:"10px"}}>
                            <span className="visit--title__last">
                                Opening hours:</span>
                            <p><br/>
                                Mon-Thu: 10:00 am - 01:00  <br/>am <br/>
                                <br/>
                                Fri-Sun: 10:00 am - 02:00 am</p>
                        </p>
                        <hr style={{}} className="visit--title__line"/>
                        <button style={{margin:"10px 0"}}>Purchase gift card > </button>
                        <hr className="visit--title__two"/>
                    </div>
                    <div className="visit--nav">
                        <p className="visit--nav__first">contact Info</p>
                        <p className="visit--nav__tel">
                            <span><BsFillTelephoneOutboundFill/></span>
                            +771219900

                        </p>
                        <p className="visit--nav__email">
                            <span><MdOutlineMailOutline/></span>
                            <p> motionweb312@gmail.com</p>

                        </p>
                        <div className="visit--nav__icons">
                            <FaTelegramPlane/>
                            <AiFillInstagram/>
                        </div>

                        <iframe className="visit--nav__map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1462.6602528071815!2d74.58639890842397!3d42.84496521345259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9dbdc3d4eef%3A0x6a75a5244d9c79f8!2z0JrQk9Ci0KMg0LjQvC4g0JguINCg0LDQt9C30LDQutC-0LLQsA!5e0!3m2!1sru!2skg!4v1684440984043!5m2!1sru!2skg"
                                width="553" height="293"  loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
        </div>
        </div>

    );
};


export default Visit;