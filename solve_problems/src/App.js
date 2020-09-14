import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import WeatherProblem from "./Components/WeatherProblem/WeatherProblem"
import MapProblem from "./Components/MapProblem/MapProblem"
function App() {
  return (
    <div className="App">
      <header><h1 id="movingTitle">지구멸망 2020</h1>
      <img src="/images/earth.png" alt="지구" id="earth"/></header>
      <div className="middle">

      <label id="title"><img src="/images/earth.png" alt="지구로고" id="earthTitle"/>지구멸망 2020</label>
      <Router>      
        <div className="StartButtons">
        <h3>당신은 다음과 같은 일들을 할 수 있습니다</h3><br/>
          <Link to="WeatherProblem">1. 지구온난화 진행시키기</Link><br/>
          <Link to="MapProblem">2. 공격할 지역 설정하기</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <WeatherProblem/>
          </Route>
          <Route path="/WeatherProblem">
            <WeatherProblem/>
          </Route>
          <Route path="/MapProblem">
             <MapProblem/>
          </Route>      
        </Switch>
      </Router>
      </div>
      <footer><h4>made in china</h4>
      <h4>developer : 20180739 김혜린</h4></footer>
    </div>
  );
}

export default App;