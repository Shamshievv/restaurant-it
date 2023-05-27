import './App.scss';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./Pages/Footer/Footer";
import { Route, Router, Routes} from "react-router-dom";
import MainN from "./Pages/Main/MainN";

import About from "./Pages/About/About";
import Visit from "./Pages/Visit/Visit";
import React from "react";
import Menu from "./Pages/Menu/MenuAboute/AboutGlobal";

function App() {
  return (
    <div className="App">
        <Header />
        {/*<Routes>*/}
        {/*    <Route path="/" element={<MainN/>} />*/}
            {/*        <Route path="*" element={<MainN />} />*/}
            {/*</Route>*/}
            {/*<Route path="AboutMenu" element={<Menu/>} />*/}





        {/*    <Route path={"about"} element={<About/>}/>*/}
        {/*    <Route path="contact" element={<Visit/>}/>*/}

        {/*</Routes>*/}
        <Menu/>
        <Footer />
    </div>
  );
}

export default App;

{/*<Route  path="/menuMain" element={<MenuRout />} />*/}
{/*    <Route path="*" element={<MenuRout />} />*/}
{/*<Route path={"menuMain"} element={<MenuRout/>}/>*/}
