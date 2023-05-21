
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./Pages/MainMenu/Sidebar";
import {Route, Routes} from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Best from "./Pages/BestSellers/Best";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

      </Routes>
      <Sidebar/>
      <Hero/>
      <Visit/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
