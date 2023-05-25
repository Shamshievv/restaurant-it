import './App.scss';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Global from "./Global/Global";
import MenuRout from "./Menu/MenuRout";
import Header from "./components/Header/Header";

function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                    <Route path="/" element={<Global />} />
                    <Route path="/menu/*" element={<MenuRout />} />
                    <Route path="/*" element={<Global />} />
            </Routes>
        </div>
    );
}

export default App;
