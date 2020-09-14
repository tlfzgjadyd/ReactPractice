import React from 'react';
import './App.css';
import Weather from "./Components/Weather"
import WeatherByFetch from "./Components/WeatherByFetch"
import NaverPay from "./Components/NaverPay"

function App() {
  return (
    <div className="App">
      <Weather/>
      <WeatherByFetch/>
      <NaverPay/>
    </div>
  );
}

export default App;
