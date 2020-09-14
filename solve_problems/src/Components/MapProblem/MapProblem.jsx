import React, { PureComponent } from 'react';
import "./MapProblem.css"

class MapProblem extends PureComponent {
    render() {
        return (
            <div className="MapProblem">
                <h2 id="mapTitle">공격할 지역을 선택하세요</h2>
                <div id="mapArea">
                    
                </div>
            </div>
        );
    }
}

export default MapProblem;