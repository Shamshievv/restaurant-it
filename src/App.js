import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Best from "./Pages/BestSellers/Best";
import Footer from "./Pages/Footer/Footer";

import {Route, Routes} from "react-router-dom";
import MainN from "./Pages/Main/MainN";

function App() {
  return (
    <div className="App">
      <Header/>
         <Routes>
             <Route path={"/"} element={<MainN/>}/>
         </Routes>
      <Footer/>
    </div>
  );
}

export default App;
