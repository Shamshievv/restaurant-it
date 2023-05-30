import './App.scss';
import React from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/Pages/Footer/Footer";
import MainN from "../src/Pages/Main/MainN";
import { Route, Routes} from "react-router-dom";

import About from "./Pages/About/About";
import Visit from "./Pages/Visit/Visit";
import AboutFoods from "./Pages/Menu/MenuAboute";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<MainN/>} >
                    <Route path="*" element={<MainN />} />
            </Route>
            <Route path="AboutMenu" element={<AboutFoods/>} />

            <Route path={"about"} element={<About/>}/>
            <Route path="contact" element={<Visit/>}/>

        </Routes>
        <Footer />
    </div>
  );
}

export default App;
