import React from 'react';
import NationalFoods from "../../../images/NationalFood.jpg";
import MenuCard from "../MenuCard";

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
                        menu.map(el=> <MenuCard el={el} key={el.id}/> )
                    }
                </div>
            </div>

        </div>
    );
};

export default NationalFoodsMenu;