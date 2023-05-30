import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? null : index);
    };

    return (
        <div id="sidebar">
            <div className="container">
                <div className="sidebar--all" style={{ textAlign: 'center' }}>
                    <div className="sidebar">
                        <ul className="nav">

                            <li className={`nav-item ${activeTab === 0 ? 'active' : ''}`}>
                                <Link to="/desert" className="nav-link" onClick={() => handleTabClick(0)}>
                                    <span>Desserts</span>
                                    {activeTab === 0 && (
                                        <div className="line-wrapper">
                                            <hr className="line-left" style={{ width:"68px", marginLeft:"  230px  "}} />
                                        </div>
                                    )}

                            <li className="nav-item ">
                                <Link to="/desert" className="nav-link ">
                                    <span>Desserts</span>

                                </Link>
                            </li>
                            <hr/>
                            <li className={`nav-item ${activeTab === 1 ? 'active' : ''}`}>
                                <Link to="hotDrinks" className="nav-link" onClick={() => handleTabClick(1)}>
                                    <span>Hot Drinks</span>
                                    {activeTab === 1 && (
                                        <div className="line-wrapper">
                                            <hr className="line-left" style={{ width:"68px", marginLeft:"  230px  "}} />
                                        </div>
                                    )}
                                </Link>
                            </li>
                            <hr/>
                            <li className={`nav-item ${activeTab === 2 ? 'active' : ''}`}>
                                <Link  to="coldDrinks" className="nav-link" onClick={() => handleTabClick(2)}>
                                    <span>Cold Drinks</span>
                                    {activeTab === 2 && (
                                        <div className="line-wrapper">
                                            <hr className="line-left" style={{ width:"68px", marginLeft:"  230px  "}} />
                                        </div>
                                    )}
                                </Link>
                            </li>
                            <hr/>
                            <li className={`nav-item ${activeTab === 3 ? 'active' : ''}`}>
                                <Link  to="nationalFoods" className="nav-link" onClick={() => handleTabClick(3)}>
                                    <span>National Foods</span>
                                    {activeTab === 3 && (
                                        <div className="line-wrapper">
                                            <hr className="line-left" style={{ width:"68px", marginLeft:"  230px  "}} />
                                        </div>
                                    )}
                                </Link>
                            </li>
                            <hr/>
                            <li className={`nav-item ${activeTab === 4 ? 'active' : ''}`}>
                                <Link  to="easternCuisine" className="nav-link" onClick={() => handleTabClick(4)}>
                                    <span>Eastern Cuisine</span>
                                    {activeTab === 4 && (
                                        <div className="line-wrapper">
                                            <hr className="line-left" style={{ width:"68px", marginLeft:"  230px  "}} />
                                        </div>
                                    )}
                                </Link>
                            </li>
                            <hr/>
                            <li className={`nav-item ${activeTab === 5 ? 'active' : ''}`}>
                                <Link  to="fastFoods" className="nav-link" onClick={() => handleTabClick(5)}>
                                    <span>Fast Foods</span>
                                    {activeTab === 5 && (
                                        <div className="line-wrapper">
                                            <hr className="line-left" style={{ width:"68px", marginLeft:"  230px  "}} />
                                        </div>
                                    )}
                                </Link>
                            </li>
<hr/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;