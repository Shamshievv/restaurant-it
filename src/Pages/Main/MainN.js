import React from 'react';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Best from "../BestSellers/Best";
import Main from "../MainMenu/Routes/Routes";
import ModernInterier from "../ModernInterier/ModernInterier";
import Visit from "../Visit/Visit";
import MenuRout from "../Menu/MenuRout";
const MainN = () => {
    return (
        <div>
           <Hero/>
           <About/>
            <Best/>
            <Main/>
            <ModernInterier/>
            <Visit/>
        </div>
    );
};
export default MainN;