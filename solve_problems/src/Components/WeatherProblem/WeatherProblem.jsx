import React, { PureComponent } from 'react';
import Weather from "./Weather"
import WeatherByFetch from "./WeatherByFetch"
import NaverPay from "./NaverPay"
class WeatherProblem extends PureComponent {
    render() {
        return (
            <div className="WeatherProblem">
             <Weather/>
             <WeatherByFetch/>
             <NaverPay/>
            </div>
        );
    }
}

export default WeatherProblem;