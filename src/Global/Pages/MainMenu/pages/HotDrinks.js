import React from 'react';
import {Link} from "react-router-dom";

const HotDrinks = () => {
    const data=[

        {
            id:1,
            title:' Dark tea',
            price:"16",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:2,
            title:'HOT CHOCOLATE',
            price:"27",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:3,
            title:' White tea',
            price:"22",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:4,
            title:' Ice cream',
            price:"9",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:5,
            title:' Fruit tea',
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

export default HotDrinks;