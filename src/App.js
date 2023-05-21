import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Best from "./Pages/BestSellers/Best";
import Footer from "./Pages/Footer/Footer";
import Main from "./Pages/MainMenu/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

      </Routes>
      <Sidebar/>
      <Hero/>
      <Visit/>
        <Main/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
