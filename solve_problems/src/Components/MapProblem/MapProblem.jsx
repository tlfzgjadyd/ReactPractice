import React, { PureComponent } from 'react';
import "./MapProblem.css"
class MapProblem extends PureComponent {

    render() {
        return (
            <div className="MapProblem">
                <div className="MapText">
                <h2 id="mapTitle">공격할 지역을 선택하세요  ex)</h2>
                <div id="mapExample">
                    <img id="mapImg" src='https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16&X-NCP-APIGW-API-KEY-ID=gzqf4on71t&X-NCP-APIGW-API-KEY=ddnnOWuUjtES0k0JO21ecv9ojJw58tGt0sCAWUNI' alt="지도"/>
                </div>
                </div>
                <div id="mapArea">
                  
                </div>
            </div>
        );
    }
}

export default MapProblem;