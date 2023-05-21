
import React from 'react';
import {Link} from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <h2>Restaurant</h2>
                    <div className="footer--title">
                        <Link className="footer--title__link" to={"/"}>
                            interior
                        </Link>
                        <Link className="footer--title__link" to={"/"}>
                            About us
                        </Link>
                        <Link className="footer--title__link" to={"/hero"}>
                            Menu
                        </Link>
                        <Link className="footer--title__link" to={"/"}>
                            Contacts
                        </Link>
                    </div>
                    <div className="footer--icon">
                        <FaTelegramPlane className="footer--icon__one"/>
                        <AiFillInstagram/>
                    </div>
                </div>
                <p className="footer--motion">c 2023 Motion Study LLC</p>
            </div>
        </div>
    );
};

export default Footer;

