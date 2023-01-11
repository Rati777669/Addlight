import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import data from './data/data.json';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Offers from './components/Offers.jsx';
import Heading from './components/Heading.js';
import Starprod from './components/Starproducts.js';
import HotAccessoriesmenu from './components/HotAccessoriesmenu';
import HotAccessories from './components/HotAccessories';
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Prefooter from './components/Prefooter.js'
import Footer from './components/Footer.js'
function App() {
  return (
   <Router basename={process.env.PUBLIC_URL}>
     <PreNavbar/>
    <Navbar/>
    <Slider Start={data.start}/>
    <Heading text="Rewards and Offers"/>
    <Offers offer={data.offer}/>
    <Heading text="Popular Products"/>
    <Starprod starprod={data.starprod}/>
    <Heading text="Hot accessories"/>
    <HotAccessoriesmenu/>
    <Routes basename={process.env.PUBLIC_URL}>
    <Route  path="/" element={<HotAccessories decor={data.decor}/>} basename={process.env.PUBLIC_URL}/>
    <Route  path="/decor" element={<HotAccessories decor={data.decor}/>} basename={process.env.PUBLIC_URL}/>
    <Route exact path="/lighting" element={<HotAccessories decor={data.lighting}/>} basename={process.env.PUBLIC_URL}/>
    <Route exact path="/brands" element={<HotAccessories decor={data.brands}/>} basename={process.env.PUBLIC_URL}/>
    <Route exact path="/outdoor" element={<HotAccessories decor={data.outdoor}/>} basename={process.env.PUBLIC_URL}/>
    <Route exact path="/tabletop" element={<HotAccessories decor={data.tabletop}/>} basename={process.env.PUBLIC_URL}/>
      </Routes >
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="In The Press"/>
      <Banner banner={data.brands}/>
      <Prefooter/>
      <Footer footer={data.footer}/>
   </Router>
  );
}

export default App;
 