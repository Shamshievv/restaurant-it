import React from 'react';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Best from "../BestSellers/Best";
import Main from "../MainMenu/Routes/Routes";
import Visit from "../Visit/Visit";
import Modern from "../ModernInterier/ModernInterier";
const MainN = () => {
    return (
        <div>
           <Hero/>
           <About/>
            <Best/>
            <Main/>
            <Modern/>
            <Visit/>
        </div>
    );
};
export default MainN;