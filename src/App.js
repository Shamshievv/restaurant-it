import './App.scss';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./Pages/Footer/Footer";
import {Outlet, Route, Router, Routes} from "react-router-dom";
import MainN from "./Pages/Main/MainN";
import Desserts from "./Pages/MainMenu/pages/Deserts";
import HotDrinks from "./Pages/MainMenu/pages/HotDrinks";
import About from "./Pages/About/About";
import Visit from "./Pages/Visit/Visit";
import MenuRout from "./Pages/Menu/MenuRout";
import ColdDrinks from "./Pages/MainMenu/pages/ColdDrinksMenu";
import NationalFoods from "./Pages/MainMenu/pages/NationalFoods";
import EasternCuisine from "./Pages/MainMenu/pages/EasternCuisine";
import FastFoods from "./Pages/MainMenu/pages/FastFoods";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<MainN/>} >
                <Route path='desert' element={<Desserts/> }/>
                <Route path='hotDrinks' element={ <HotDrinks/> }/>
                <Route path='coldDrinks' element={ <ColdDrinks/> }/>
                <Route path='nationalFoods' element={ <NationalFoods/> }/>
                <Route path='easternCuisine' element={ <EasternCuisine/> }/>
                <Route path='fastFoods' element={ <FastFoods/> }/>
            </Route>


            <Route  path="/menuMain" element={<MenuRout />} />

                <Route path="*" element={<MenuRout />} />



            <Route path={"about"} element={<About/>}/>
            <Route path={"menuMain"} element={<MenuRout/>}/>
            <Route path="contact" element={<Visit/>}/>

        </Routes>
        <Footer />
    </div>
  );
}

export default App;

