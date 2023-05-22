import React from 'react';
import NationalFoods from "../../../images/NationalFood.jpg";

const NationalFoodsMenu = () => {
    const menu=[
        {
            id:1,
            images:NationalFoods,
            title:" meat",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
        {
            id:2,
            images:NationalFoods,
            title:"meat",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:3,
            images:NationalFoods,
            title:"meat",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:4,
            images:NationalFoods,
            title:"meat",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:5,
            images:NationalFoods,
            title:"meat",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
        {
            id:6,
            images:NationalFoods,
            title:"meat",
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

export default NationalFoodsMenu;