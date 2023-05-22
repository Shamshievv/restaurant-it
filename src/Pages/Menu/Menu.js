import React from 'react';
import {Link} from "react-router-dom";
const MenuDeserts = () => {
    return (
        <div id="sidebar">
            <div className="container">
                <div className="sidebar--all  ">
                    <div className="sidebar" style={{textAlign:"center"}} >
                        <ul className="nav  ">
                            <li className="nav-item ">
                                <Link to="/desertMenu" className="nav-link ">
                                    <span> Desserts </span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="/hotDrinksMenu" className="nav-link ">
                                    <span> Hot Drinks</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="/coldDrinksMenu" className="nav-link ">
                                    <span> Cold Drinks</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="/nationalFoodsMenu" className="nav-link ">
                                    <span>  National Foods</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="/easternCuisineMenu" className="nav-link ">
                                    <span> Eastern cuisine</span>
                                </Link>
                                <hr className="text-secondary "/>
                            </li>
                            <li className="nav-item ">
                                <Link to="/fastFoodsMenu" className="nav-link text-white">
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

export default MenuDeserts;