import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Footer from "./Pages/Footer/Footer";
import Best from "./Pages/BestSellers/Best";
import Main from "./Pages/MainMenu/Routes/Routes";
import {Route, Routes} from "react-router-dom";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Routes>
          <Route path={"/about"} element={<About/>}/>
      </Routes>
        <About/>
      <Best/>
      <Main/>
      <Visit/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
