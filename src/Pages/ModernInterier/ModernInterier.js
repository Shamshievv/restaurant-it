import React from 'react';
import bg from "../../../src/images/restuarant1.png"
import bg2 from "../../images/restaurant2.png"
import bg3 from "../../images/restaurant3.png"
import bg4 from "../../images/restaurant4.png"
import bg5 from "../../images/restaurant5.png"
import vector from "../../images/hero-wave.svg"
import vect from   "../../images/hero-wave-right.svg"
const Modern = () => {

           return (
               <div id="modern">
           <div className="container">
           <div className="line"/>
           <div className="modern--text">
           <div className="modern--text__block">
           <img src={vector} alt="" className="modern--text__block--img"/>
           </div>
           <h1 className="modern--text__title">Modern Interior</h1>
           <div className="modern--text__block">
           <img src={vect} alt="" className="modern--text__block--img"/>
           </div>
           </div>
           <div className="modern">
           <div className="modern--img">
           <img src={bg} alt=""/>
           </div>
           <div className="modern--image">
           <img src={bg2} alt=""/>
           <div className="modern--image__fon">
           <img src={bg3} alt=""/>
           <img src={bg4} alt=""/>
           </div>
           </div>
           <div className="modern--img">
           <img src={bg5} alt=""/>
           </div>
           <div className="modern--img">
           <img src={bg} alt=""/>
           </div>
           <div className="modern--image">
           <img src={bg2} alt=""/>
           <div className="modern--image__fon">
           <img src={bg3} alt=""/>
           <img src={bg4} alt=""/>
           </div>
           </div>
           <div className="modern--img">
           <img src={bg5} alt=""/>
           </div>
           </div>
           </div>
           </div>
    );
};

export default Modern;