import React from 'react';
import {Link, Outlet} from "react-router-dom";
const Sidebar = () => {
    return (
        <div id="sidebar">
            <div className="container">
                <div className="sidebar--all  ">
                    <div className="sidebar" style={{textAlign:"center"}} >
                        <ul className="nav">
                            <li className="nav-item ">
                                <Link to="/desert" className="nav-link ">
                                    <span> Desserts</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="hotDrinks" className="nav-link ">
                                    <span> Hot Drinks</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="coldDrinks" className="nav-link ">
                                    <span> Cold Drinks</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="nationalFoods" className="nav-link ">
                                    <span>  National Foods</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="easternCuisine" className="nav-link ">
                                    <span> Eastern cuisine</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="fastFoods" className="nav-link text-white">
                                    <span> Fast foods</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>

                        </ul>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;

