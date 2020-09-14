import React, { PureComponent } from 'react';
import axios from "axios"

class Weather extends PureComponent {
    constructor() {
    super();
    this.state={
    transactions:[{ 
        "coord": {     
          "lon": -122.08,
          "lat": 37.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 282.55,
          "feels_like": 281.86,
          "temp_min": 280.37,
          "temp_max": 284.26,
          "pressure": 1023,
          "humidity": 100
        },
        "visibility": 16093,
        "wind": {
          "speed": 1.5,
          "deg": 350
        },
        "clouds": {
          "all": 1
        },
        "dt": 1560350645,
        "sys": {
          "type": 1,
          "id": 5122,
          "message": 0.0139,
          "country": "US",
          "sunrise": 1560343627,
          "sunset": 1560396563
        },
        "timezone": -25200,
        "id": 420006353,
        "name": "Mountain View",
        "cod": 200
        }], 
        temp: 0,       
        SeoulTemp:0,  
        LondonTemp:0  
      };             
      this.method=this.method.bind(this);  //constructor 안에는 state선언 밑에 함수 bind 필요
      this.getSeoul=this.getSeoul.bind(this);
      this.getLondon=this.getLondon.bind(this);
    }
      method() {  //constructor 바깥에는 함수 정의부를 선언 
        this.setState({temp:this.state.temp+1});
      }
      getSeoul() {
          this.setState({temp:this.state.SeoulTemp});
      }
      getLondon() {
        this.setState({temp:this.state.LondonTemp});
    }
    componentDidMount() {   //제공되는 api앞에는 반드시 http같은걸 추가해야하며 값 제대로 들어왔는지 concole로 response 찍어봐야됨
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=f951b19e378232992a50374991b1f518&units=metric&q=London')
        .then(response =>{
            this.setState({temp:response.data.main.temp, LondonTemp:response.data.main.temp}) //이부분이 선언해둔 2개의 변수에 데이터 집어넣는 부분이다
                        //하나의 setState 만으로도 여러개의 변수에 실체를 집어넣을 수 있음 this.setState({ , , })
            console.log(response.data.main.temp);//state 변수 사용시에는 this.temp말고 this.state.temp까지 해야함
        })
        .then(  //axios를 두 번 쓸 경우 .then으로 이어줘야했음 이렇게 안하는 방법도 있을것같긴 한데 일단 에러 안나고 성공한건 이게 끝이다
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=f951b19e378232992a50374991b1f518&units=metric&q=Seoul')
        .then(response =>{ 
            this.setState({SeoulTemp:response.data.main.temp})
            console.log(this.state.SeoulTemp); //state 변수 사용시에는 this.temp말고 this.state.temp까지 해야함
        })
        )
    }

    render() {
        return (
            <div className="Weather">
                <h1>온도 {this.state.temp}'c</h1><br/><br/>
                <button onClick={this.method}>지구온난화 진행하기</button><br/><br/>
                <button onClick={this.getSeoul}>서울 온도 가져오기</button> <br/><br/>
                <button onClick={this.getLondon}>런던 온도 가져오기</button>
            </div> //onClick함수 지정하는 부분에는 단순히 this.함수명 하면 되는게 아니라 {this.함수명} 이렇게 해야한다!
        );
    }
}

export default Weather;