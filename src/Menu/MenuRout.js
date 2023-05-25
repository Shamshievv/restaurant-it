import React from 'react';
import {Route, Routes} from "react-router-dom";
import DesertsMenu from "./MenuPages/DesertsMenu";
import MenuDeserts from "./Menu";
import HotDrinksMenu from "./MenuPages/HotDrinksMenu";
import ColdDrinksMenu from "./MenuPages/ColdDrinksMenu";
import NationalFoodsMenu from "./MenuPages/NationalFoodsMenu";
import EasternCuisineMenu from "./MenuPages/EasternCuisineMenu";
import FastFoodsMenu from "./MenuPages/FastFoodsMenu";
import Sidebar from "../Global/Pages/MainMenu/Sidebar";
import Main from "../Global/Pages/MainMenu/Routes/Routes";

const MenuRout = () => {


    return (
        <div id="rout">
            <div className="rout ">
                <div className="rout--all ">
                    <MenuDeserts/>
                    <Routes>
                        <Route path="desertMenu" element={<DesertsMenu/>}/>
                        <Route path='/hotDrinksMenu' element={<HotDrinksMenu/>}/>
                        <Route path='/coldDrinksMenu' element={<ColdDrinksMenu/>}/>
                        <Route path='/nationalFoodsMenu' element={<NationalFoodsMenu/>}/>
                        <Route path='/easternCuisineMenu' element={<EasternCuisineMenu/>}/>
                        <Route path='/fastFoodsMenu' element={<FastFoodsMenu/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MenuRout;