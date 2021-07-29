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