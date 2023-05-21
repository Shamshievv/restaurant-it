import React from 'react';
import {Link} from "react-router-dom";

const FastFoods = () => {
    const data=[

        {
            id:1,
            title:'Milkshake',
            price:"23",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:2,
            title:'Shawarma',
            price:"37",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:3,
            title:' Pizza',
            price:"45",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:4,
            title:' Hot Dog',
            price:"18",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:5,
            title:' Sandwich',
            price:"12",
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
                                <div className="deserts__all">
                                    <h4>{item.title }</h4>
                                    <h5>...............................................................</h5>
                                    <h2> ${item.price}</h2>
                                </div>
                                <p> {item.description}</p>
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

export default FastFoods;