import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./Pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import MainN from "./Pages/Main/MainN";
import About from "./Pages/About/About";
import Main from "./Pages/MainMenu/Routes/Routes";
import Visit from "./Pages/Visit/Visit";
import Hero from "./Pages/Hero/Hero";
import MenuRout from "./Pages/Menu/MenuRout";
function App() {
  return (
    <div className="App">
      <Header/>
         <Routes>
             <Route path={"/"} element={<MainN/>}/>
             <Route path={"/menuMain/*"} element={<MenuRout/>}/>
             <Route path={"/*"} element={<MenuRout/>}/>

             <Route path={"/"} element={<MainN/>}/>
             <Route path={"/about"} element={<About/>}/>
             {/*<Route path={"/menu"} element={<Main/>}/>*/}
             <Route path={"/contact"} element={<Visit/>}/>
             {/*<Route path={"/menuRout"} element={<MenuRout/>}/>*/}

         </Routes>

        {/*<Main/>*/}
      <Footer/>
    </div>
  );
}

export default App;
