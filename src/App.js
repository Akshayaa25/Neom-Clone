import './App.css';
import GenricSlider from './components/GenricSlider';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Partner from './components/Partner';
import RegionSlider from './components/RegionSlider';
import Swiper from './components/Swiper';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Swiper/>
      <RegionSlider/>
      <Partner/>
      <GenricSlider/>
      <NewsLetter/>
    </div>
  );
}

export default App;
