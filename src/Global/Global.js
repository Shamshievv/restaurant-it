import React from "react"
import Header from "../components/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Main from "./Pages/MainMenu/Routes/Routes";
import MenuRout from "../Menu/MenuRout";
import Visit from "./Pages/Visit/Visit";
import Best from "./Pages/BestSellers/Best";
import Footer from "./Pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Sidebar from "./Pages/MainMenu/Sidebar";
 const Global=()=>{
    return(
        <div>
            <Hero/>
            <Main/>
            <Visit/>
            <Best/>
            <Footer/>
        </div>
    )

}
export default Global