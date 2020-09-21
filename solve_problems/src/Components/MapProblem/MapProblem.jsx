import React, { PureComponent } from 'react';
import "./MapProblem.css"

class MapProblem extends PureComponent {

    constructor(){
        super();
        this.state={
            "mapOptions":[{
                "center": "",
                "zoom": "",
            }],
            "map": ""
        }
    }

    componentDidMount(){
        console.log(this.state.mapOptions[0].center);// 이렇게 배열안에 넣은 원소는 this.state.배열명[indez].변수명 여기까지 다 입력해야지만 출력이 가능하다
        this.setState(this.state.mapOptions[0].center,1);
        console.log(this.state.mapOptions[0].center);
       // this.setState({center:new Window.naver.maps.LatLng(37.3595704, 127.105399), zoom : 10 });
    }
    render() {
        return (
            <div className="MapProblem">
                <div className="MapText">
                <h2 id="mapTitle">공격할 지역을 선택하세요  ex)</h2>
                <div id="mapExample">
                    <img id="mapImg" src='https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16&X-NCP-APIGW-API-KEY-ID=gzqf4on71t&X-NCP-APIGW-API-KEY=ddnnOWuUjtES0k0JO21ecv9ojJw58tGt0sCAWUNI' alt="지도"/>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        );
    }
}

export default MapProblem;