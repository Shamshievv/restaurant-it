import React from 'react';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Best from "../BestSellers/Best";
import ModernInterier from "../ModernInterier/ModernInterier";
import Visit from "../Visit/Visit";
const MainPage = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Best/>
            <ModernInterier/>
            <Visit/>
        </div>
    );
};

export default MainPage;