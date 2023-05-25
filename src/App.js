
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Best from "./Pages/BestSellers/Best";
import Footer from "./Pages/Footer/Footer";
import Main from "./Pages/MainMenu/Routes/Routes";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Header/>
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
