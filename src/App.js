// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Footer from "./Pages/Footer/Footer";
import Best from "./Pages/BestSellers/Best";
import Sidebar from "./Pages/MainMenu/Sidebar";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
        <Best/>
        <Sidebar/>
      <Visit/>
      <Footer/>
    </div>
  );
}

export default App;
