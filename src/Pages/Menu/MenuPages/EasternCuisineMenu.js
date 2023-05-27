import React from 'react';
import EasternCuisineMenuImg from "../../../images/EasternCuisineMenu.jpeg";
import MenuCard from "../MenuCard";

const EasternCuisineMenu = () => {
    const menu=[
        {
            id:1,
            images:EasternCuisineMenuImg,
            title:" Alfredo",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
        {
            id:2,
            images:EasternCuisineMenuImg,
            title:"Alfredo",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:3,
            images:EasternCuisineMenuImg,
            title:"Alfredo",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:4,
            images:EasternCuisineMenuImg,
            title:"Alfredo",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        }, {
            id:5,
            images:EasternCuisineMenuImg,
            title:"Alfredo",
            price:"9.11",
            discriminant:"soda,cream,milk,sugar"
        },
        {
            id:6,
            images:EasternCuisineMenuImg,
            title:"Alfredo",
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

export default EasternCuisineMenu;