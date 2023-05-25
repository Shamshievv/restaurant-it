import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar"
import Desserts from "../pages/Deserts";
import HotDrinks from "../pages/HotDrinks";
import ColdDrinks from "../pages/ColdDrinksMenu";
import NationalFoods from "../pages/NationalFoods";
import EasternCuisine from "../pages/EasternCuisine";
import FastFoods from "../pages/FastFoods";

import IconImg from "../../../../images/hero-wave-right.svg";
import IconImg2 from "../../../../images/hero-wave-right.svg";
import { BsArrowRight } from 'react-icons/bs';
import MenuRout from "../../../../Menu/MenuRout";

const Main = () => {


    return (
<div id="rout">
    <div className="rout ">
        <div className="rout--teen">
            <div className="rout--img " style={{color:"white" ,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <img src={IconImg} alt=""/>
                <h3> Main Menu</h3>
                <img src={IconImg2} alt=""/>

            </div>

            <h1 style={{color:"white",padding:"20px 0"}}>Exceptional Quality. <br/>
                Delightfully Delicious</h1>

        </div>

        <div className="rout--all d-flex">
            <Sidebar/>
            <Routes>
                <Route path='/desert' element={<Desserts/> }/>
                <Route path='/hotDrinks' element={ <HotDrinks/> }/>
                <Route path='/coldDrinks' element={ <ColdDrinks/> }/>
                <Route path='/nationalFoods' element={ <NationalFoods/> }/>
                <Route path='/easternCuisine' element={ <EasternCuisine/> }/>
                <Route path='/fastFoods' element={ <FastFoods/> }/>
                <Route path='/menuRout' element={ <MenuRout/> }/>
            </Routes>

        </div>
        <div  className="rout--link ">
            <ul >
                <li className="nav-item ">
                    <Link to="/menuRout" style={{color:"white"}} className="nav-link text-white">
                        <span >  View Full menu  <BsArrowRight/> </span>
                    </Link>
                </li>

            </ul>

        </div>


    </div>

</div>
    );
};

export default Main;



