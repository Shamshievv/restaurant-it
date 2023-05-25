import React from "react";
import Hero from "./Hero/Hero";
import Main from "./MainMenu/Routes/Routes";
import About from "./About/About";
import Best from "./BestSellers/Best";
import Visit from "./Visit/Visit";

const Global=()=>{
    return(
        <div>
            <Hero/>
            <About/>
            <Main/>
            <Best/>
            <Visit/>
        </div>
    )
}
export default Global;