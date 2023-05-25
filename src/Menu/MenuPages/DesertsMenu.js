import React from 'react';
import DessertsMenu1 from "../../images/DessertsMenu1.png"
import DessertsMenu2 from "../../images/DessertsMenu2.png"
import DessertsMenu3 from "../../images/DessertsMenu3.png"
import DessertsMenu4 from "../../images/DessertsMenu4.png"
import DessertsMenu5 from "../../images/DessertsMenu5.png"
import DessertsMenu6 from "../../images/DessertsMenu6.png"

const DesertsMenu = () => {
    const menu=[
        {
            id:1,
            images:DessertsMenu1,
            title:"Ice Cream",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
        {
            id:2,
            images:DessertsMenu2,
            title:"Ice Cream",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:3,
            images:DessertsMenu3,
            title:"Ice Cream",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:4,
            images:DessertsMenu4,
            title:"Ice Cream",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:5,
            images:DessertsMenu5,
            title:"Ice Cream",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
        {
            id:6,
            images:DessertsMenu6,
            title:"Ice Cream",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
    ]
    return (
        <div className=" menuRout" style={{width:"50%",}}>
            <div className="container" >
                <div className="menuDesert " style={{
                    width:"48%" , display: "grid", gridTemplateColumns: "1fr 1fr"
                }}>
                    {
                        menu.map((el,idx)=>(
                            <div style={{
                                 background:"white",margin:"10px",
                            }}>
                                <img style={{width:'100%'}} src={el.images} alt=""/>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div>
                                        <h2>{el.title}</h2>
                                        <p style={{color:"#939393"}}>{el.discriminant}</p>
                                    </div>
                                    <h2 style={{color:"#EF272C"}}>${el.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default DesertsMenu;