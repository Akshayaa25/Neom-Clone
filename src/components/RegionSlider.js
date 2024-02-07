import React, { useState } from 'react';
import './Styles/RegionSlider.css';
import place from '../assets/Place.jpeg';
import place1 from '../assets/Place1.jpeg';
import place2 from '../assets/Place2.jpg';
import place3 from '../assets/Place3.jpg';
import place4 from '../assets/Place4.jpg';

function RegionSlider() {
  const [regImg, setRegImg] = useState(place);
  const [regName, setRegName] = useState('This is Neom')

  function changeRegion(n) {
    if (n === 1) {
      setTimeout(() => {
        setRegImg(place1);
        setRegName('Upper Valley');
      }, 200);
    } else if (n === 2) {
      setTimeout(() => {
        setRegImg(place2);
        setRegName('Mountain');
      }, 200);
    } else if (n === 3) {
      setTimeout(() => {
        setRegImg(place3);
        setRegName('Lower Desert');
      }, 200);
    } else if (n === 4) {
      setTimeout(() => {
        setRegImg(place4);
        setRegName('Marine Landscape');
      }, 200);
    }
  }

  function defaultPlace() {
    setRegImg(place);
    setRegName('This is Neom');
  }

  return (
    <div className='region'>
      <div>
        <img src={regImg} className='region-img' />
        <div className='place-spot'>
          <div className='place place1' onMouseEnter={() => changeRegion(1)} onMouseLeave={defaultPlace} ></div>
          <div className='place place2' onMouseEnter={() => changeRegion(2)} onMouseLeave={defaultPlace}></div>
          <div className='place place3' onMouseEnter={() => changeRegion(3)} onMouseLeave={defaultPlace}></div>
          <div className='place place4' onMouseEnter={() => changeRegion(4)} onMouseLeave={defaultPlace}></div>
        </div>
      </div>
      <div className='region-tab'>
        <h1>{regName}</h1>
      </div>
      <div className='region-weather'>
        <div className='weather'>
          <div className='weather-ct'>
            <div className='weather-ct-head'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="m38.695 11-2.905.8 1.536 5.462 2.905-.8L38.695 11Zm10.413 14.887-.824 2.871L53.41 30.2l.824-2.872-5.125-1.441Zm1.542-12.482-4.69 4.644 2.132 2.11 4.69-4.643-2.131-2.11Z"></path><path d="m13.022 35.388 14.54-19.626 9.942 11.097 4.318 4.811 6.076 6.804c1.227 0 2.506-.078 3.828-.221l-6.892-7.71a6.944 6.944 0 0 0 2.028-2.11 6.848 6.848 0 0 0 .71-5.652 6.896 6.896 0 0 0-1.444-2.538 6.98 6.98 0 0 0-2.372-1.724 7.044 7.044 0 0 0-5.753.02 6.978 6.978 0 0 0-2.36 1.741l-8.3-9.266L8.445 36.52a48.866 48.866 0 0 0 3.186-.775c.463-.131.927-.248 1.39-.357Zm27.881-14.491a3.998 3.998 0 0 1 2.435.829 3.929 3.929 0 0 1 1.41 2.133c.217.846.144 1.74-.209 2.54a3.947 3.947 0 0 1-1.737 1.88l-5.13-5.728c.365-.512.85-.929 1.412-1.216a3.993 3.993 0 0 1 1.82-.438ZM34.66 45.034c.106.053 10.378 3.842 22.249.752a56.474 56.474 0 0 1 2.331-.555l.76 2.891c-.753.16-1.529.343-2.328.551A42.007 42.007 0 0 1 47.138 50c-7.735 0-13.23-2.041-13.553-2.165-.103-.034-10.443-3.793-21.369-.715C7.484 48.452 3.4 48.9 0 48.874l.76-3.01c2.991-.038 6.547-.475 10.632-1.627 11.91-3.338 22.808.628 23.267.797Z"></path><path d="M33.824 40.955c-.106-.034-10.443-3.79-21.372-.714C7.61 41.605 3.446 42.042 0 41.994l.76-3.005c3.037-.02 6.669-.45 10.856-1.635 11.913-3.353 22.812.628 23.267.8.11.057 10.383 3.842 22.25.752a57.08 57.08 0 0 1 2.107-.506l.76 2.894c-.678.148-1.374.313-2.089.5a41.841 41.841 0 0 1-10.538 1.326c-7.735 0-13.226-2.04-13.549-2.165Z"></path></svg>
            </div>
            <p>COOLER THAN THE <br/>REST OF GCC</p>
          </div>
          <div className='weather-ct'>
            <div className='weather-ct-head'>468 <span>KM</span></div>
            <p>COASTLINE LENGTH</p>
          </div>
          <div className='weather-ct'>
            <div className='weather-ct-head'>41</div>
            <p>ISLANDS TO DISCOVER</p>
          </div>
          <div className='weather-ct'>
            <div className='weather-ct-head'>26,500 <span>KM²</span></div>
            <p>LAND FOOTPRINT ALMOST THE SIZE OF BELGIUM</p>
          </div>
        </div>
        <div className='weather-desc'>
          Located in the temperate northwest of Saudi Arabia, NEOM's diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM's unique location will provide residents with enhanced livability while protecting 95% of the surrounding natural landscape.
        </div>
        <div>
          <button>About Neom</button>
        </div>
      </div>
    </div>
  )
}

export default RegionSlider;