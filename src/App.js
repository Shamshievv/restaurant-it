import './App.scss';
import Header from "../src/components/Header/Header";
import Footer from "./Pages/Footer/Footer";
import MainN from "./Pages/Main/MainN";``
import React from "react";
import Menu from "./Pages/Menu/MenuAboute/AboutGlobal";
import { Route, Routes} from "react-router-dom";

import About from "./Pages/About/About";
import Visit from "./Pages/Visit/Visit";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<MainN/>} >
                    <Route path="*" element={<MainN />} />
            </Route>


            <Route path="AboutMenu" element={<Menu/>} />

            <Route path={"about"} element={<About/>}/>
            <Route path="contact" element={<Visit/>}/>

        </Routes>
        <Footer />
    </div>
  );
}

export default App;
