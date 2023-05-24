import React from 'react';
import {Link} from "react-router-dom";

const NationalFoods = () => {
    const data=[

        {
            id:1,
            title:' Beshbarmak',
            price:"16",
            description:" A traditional dish made with beef or lamb and dough. "
        },
        {
            id:2,
            title:'Argentine Steak',
            price:"27",
            description:"Large dumplings usually filled with meat. "
        },
        {
            id:3,
            title:'Barbecue ',
            price:"22",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:4,
            title:' Meatballs',
            price:"9",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:5,
            title:' Paella ',
            price:"32",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
    ]

    return (
        <div className="pages">
            <div className="container">
                <div className="deserts">
                    {
                        data.map((item,idx)=>(
                            <div>
                                <div className="deserts--all" style={{ display:'flex',alignItems:"center",justifyContent:"space-between"}}>
                                    <h4>{item.title }</h4>
                                    <h5>...............................................................</h5>
                                    <h2> ${item.price}</h2>
                                </div>
                                <p style={{padding:"15px 0"}}> {item.description}</p>
                                <div className="order-now">
                                    <ul>
                                        <li className="nav-item ">
                                            <Link to="/" className="nav-link">
                                                <span className="">Order Now</span>
                                                <hr/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default NationalFoods;