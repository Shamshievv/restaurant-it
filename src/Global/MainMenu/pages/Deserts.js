import React from 'react';
import {Link} from "react-router-dom";

const Desserts = () => {
    const data=[

        {
            id:1,
            title:' Beer Brewery',
            price:"24",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:2,
            title:'Fruit juice',
            price:"37",
            description:" Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ. "
        },
        {
            id:3,
            title:' Smoothie',
            price:"15",
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
            title:' Lemonade',
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

export default Desserts;