
import './App.scss';
import Header from "./components/Header/Header";
import Visit from "./Pages/Visit/Visit";

import Footer from "./Pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import MenuAdaptation from "./Pages/M-adaptation/menuAdaptation";
import React from "react";
import MainPage from "./Pages/main";

import Best from "./Pages/BestSellers/Best";
import Footer from "./Pages/Footer/Footer";
import Main from "./Pages/MainMenu/Routes/Routes";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
          <Route path={"/mAdaptation"} element={<MenuAdaptation/>}/>
          <Route path={"/"} element={<MainPage/>}/>
          <Route path={"/visit"} element={<Visit/>}/>
      </Routes>

        <Hero/>
        <Main/>
      <About/>
        <Best/>
        <Visit/>

      <Footer/>
    </div>
  );
}
export default App;
