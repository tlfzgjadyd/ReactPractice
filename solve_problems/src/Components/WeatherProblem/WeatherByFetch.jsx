import Axios from 'axios';
import React, { PureComponent } from 'react';

class WeatherByFetch extends PureComponent {
    constructor(){
        super();
        this.state={
            temp:0,
            SeoulTemp:0,
            LondonTemp:0
        }
        this.method=this.method.bind(this);
        this.getSeoul=this.getSeoul.bind(this);
        this.getLondon=this.getLondon.bind(this);
    }
    method(){
;
    }
    getSeoul(){
;
    }
    getLondon(){
;
    }
    componentDidMount(){
       fetch('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=f951b19e378232992a50374991b1f518&units=metric&q=London')
       .then(response=>response.json())
       .then(myJson=>{console.log('Success:', JSON.stringify(myJson));})//이게 fetch로 받은 데이터 한번 써보는 형식이다
       .catch(error=>{console.error('Error:', error)});
    }
    render() {
        return (
            <div className="WeatherByFetch">
                <h1>Fetch 온도 'c</h1><br/><br/>
                <button>지구온난화 진행하기</button><br/><br/>
                <button>서울 온도 가져오기</button><br/><br/>
                <button>런던 온도 가져오기</button><br/><br/>
            </div>
        );
    }
};

export default WeatherByFetch;