import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./Global/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Global from "./Global/Global";
import MenuRout from "./Menu/MenuRout";
import About from "./Global/About/About";
import Visit from "./Global/Visit/Visit";
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
                <Route path="/" element={<Global/>} />
                <Route path="/menu/*" element={<MenuRout/>} />
               <Route path="/*" element={<Global />} />
            <Route path="/aboutUs" element={<About/>} />
            <Route path="/contacts" element={<Visit/>} />
        </Routes>
      <Footer/>
    </div>
  );
}
export default App;


