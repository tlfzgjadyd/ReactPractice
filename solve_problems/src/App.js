import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from "./Components/Weather"
import WeatherByFetch from "./Components/WeatherByFetch"

function App() {
  return (
    <div className="App">

      <WeatherByFetch/>
    </div>
  );
}

export default App;
