import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Visit from "./Pages/Visit/Visit";
import Footer from "./Pages/Footer/Footer";
import Best from "./Pages/BestSellers/Best";
import Main from "./Pages/MainMenu/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Best/>
      <Main/>
      <Visit/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
