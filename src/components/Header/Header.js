import {CiSearch} from "react-icons/ci";
import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";

import {FiSearch} from "react-icons/fi";

const Header = () => {
    const [burger, setBurger] = useState(false)
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div
                        style={{
                            transform: !burger ? 'translateY(-120%)' : "",
                            transition:!burger ? "04,01,0s" : "04,01,0s",
                            animation:"2s easy-in-out"
                        }}
                        className="header__menu">
                        <nav className="header__menu--navbar">
                            <NavLink onClick={() => setBurger(true)} >
                                interior
                            </NavLink>
                            <Link to="/about" onClick={() => setBurger(false)} >
                                About Us
                            </Link>
                            <NavLink onClick={() => setBurger(true)} >
                                Menu
                            </NavLink>

                            <NavLink onClick={() => setBurger(true)} >
                                Contacts
                            </NavLink>
                            <div className="header__menu--navbar__languages">
                                <button>EN</button>
                                <button>RU</button>
                                <button>KG</button>
                            </div>
                        </nav>
                    </div>
                    <NavLink to={'/'}>
                        <h1> Restaurant</h1>
                    </NavLink>
                    <nav className="header__navbar">
                        <NavLink to={'/'}>
                            interior
                        </NavLink>

                        <NavLink   to={'/about'}>
                            About Us
                        </NavLink>

                        <NavLink to={'/menuMain'}>
                            Menu
                        </NavLink>

                        <NavLink to={'/contact'}>
                            Contacts
                        </NavLink>

                        <div className="header__navbar--input">
                            <input type="text" placeholder="Search"/>
                            <span><CiSearch/>
                            </span>
                        </div>
                        <h3>En</h3>
                    </nav>


                    <div onClick={() => setBurger(!burger)} className="header__burger">
                        <div style={{
                            transform:burger ? "rotate(30deg) " : "rotate(0)",
                            transition:".4s",


                        }} className="header__brm">
                            <div style={{
                                transform:burger ? "rotate(-79deg) " : "rotate(0)",
                                display:burger ? "none" :"block"
                            }} className="header__brm--top"/>
                            <div style={{
                                transform:burger ? "rotate(-78deg) " : "rotate(0)",
                                marginRight:burger ? "8px" : "0",
                                width:burger ? "12px " : "0",
                                display:burger ? "none" : "block"

                            }} className="header__brm--ser"/>
                            <div style={{
                                transform:burger ? "rotate(0) " : "rotate(0)",
                                display:burger ? "none" : "block"
                            }} className="header__brm--sub"/>
                            <div style={{
                                transform:burger ? "rotate(0) " : "rotate(0)",
                                display:burger ? "none" : "block"
                            }} className="header__brm--bottom"/>
                        </div>
                        <div  style={{
                            transform: burger ? "rotate(-49deg)" : "rotate(0)",
                            display: burger ? "block" : "none" ,
                            transition:burger ? ".4s": ""

                        }}
                              className="header__close"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;