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
        // this.setState(this.state.mapOptions[0].center);
        console.log(this.state.mapOptions[0].center);
       this.setState({mapOptions:  [{center:new window.naver.maps.LatLng(37.3595704, 127.105399), zoom : 10 }], ...this.state});
       this.setState({map:new window.naver.maps.Map('map', this.mapOptions), ...this.state});
       //그리고 여기서 안됐던 이유는 잘못된 예제를 가져왔기 때문이었음 weather측에서 안쓰는 trnasaction배열 내에도 temp있지만 실제로 쓴건 바깥의 temp임
       //그래서 이거는 실제로는 어떻게 해야하냐면 mapOptions배열을 통째로 갈아껴야됨 배열내의 center변수만 바꾸는건 불가능하다는 소리다
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