import React, {useState} from 'react';
import wave from "../../images/hero-wave.svg"
import waveRight from "../../images/hero-wave-right.svg"
import {AiOutlineArrowRight} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import {MdLocalPhone} from 'react-icons/md'
import profile from "../../images/profile-window.svg"
import telIcon from "../../images/tel-icon.svg"

const Hero = () => {
    const [open,setOpen] = useState(false)
    function getOpen(){
        if (open === false){
            setOpen(true)
        } else {
            return setOpen(false)
        }
    }
    // function getClose () {
    //     if (open === true){
    //         setOpen(false)
    //     }
    //
    // }


    return (
        <div style={{
            overflow:"hidden",
        }}>
            <div  style={{
                backdropFilter:open ? "blur(4px)" : "blur(0)",
            }}  id="hero">
                <div className="container">
                    <hr className="hero__line-top"/>
                    <hr className="hero__line-bottom"/>
                    <hr className="hero__line-left"/>
                    <div style={{
                        // backdropFilter:open ? "blur(4px)" : "blur(0)",
                    }} className="hero">
                        <div className="hero--block">
                            <img src={wave} alt=""/>
                            <h4>Delicious,</h4>
                            <img src={waveRight} alt=""/>
                        </div>
                        <div className="hero--main">
                            <h1>Italian Cuisine</h1>
                            <p className="hero--main__par">Classic steak & delicious with delightfully unexpenced twists.
                                The Restaurant`s sunny decor was inspired by the diners</p>
                            <div className="hero--main__decor">
                                <div/>
                                <button onClick={() =>getOpen() }>
                                    <h1>Reserve Your Table<AiOutlineArrowRight style={{
                                        marginLeft: '15px'
                                    }}/></h1></button>
                                <div/>
                            </div>
                            <div className="hero--main__modal"style={{
                                // display:open ? "block" : "none",
                                transform : open ? "translateX(200px)" : "translateX(650px)",



                            }}>
                                <div className="hero--main__modal--window">
                                    <div className="hero--main__modal--window__block">
                                        <div className="hero--main__modal--window__block--card">
                                            <img src={profile} alt="img"/>
                                            <p style={{
                                                fontSize:"12px"
                                            }}>
                                                NAME
                                                <br/>
                                                <span style={{
                                                    fontSize:"17px"
                                                }}><span style={{color:"blue"}}>
                                                |
                                            </span>Enter your name</span>
                                            </p>
                                        </div>
                                        <div className="hero--main__modal--window__block--second">
                                            <img src={telIcon} alt="img"/>
                                            <p>
                                                NAME
                                                <br/>
                                                <span>Enter your name</span>
                                            </p>
                                        </div>
                                        <button onClick={getOpen}>Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero--absence">
                            <div className="hero--absence__archive">
                                <h1>Location</h1>
                                <div/>
                                <ImLocation2 className="hero--absence__archive--icon"/>
                                <h4>Rua da media 1g,1200-275,Portugal</h4>
                            </div>
                            <div className="hero--absence__select">
                                <h1>Hotline</h1>
                                <div/>
                                <MdLocalPhone className="hero--absence__select--icon"/>
                                <h5>+771219900</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Hero;