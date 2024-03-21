import { useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Amentities from './Pages/Amentities';
import Apartment from './Pages/Apartment';
import Banner from './Pages/Banner';
import Booming from './Pages/Booming';
import Expert from './Pages/Expert';
import FAQ from './Pages/FAQ';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar'
import Overview from './Pages/Overview';

const App = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Overview />
      <Apartment />
      <Booming />
      <Amentities />
      <Expert />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
