import React, { PureComponent } from 'react';
import axios from "axios"

class Weather주석판 extends PureComponent {
    //전체적인 구성은 다음과 같다
    /*
    class 클래스명 extends PureComponent{
        //////////////////////////////////////////////////
        constructor(){
            super();
            ///////////////////////
            this.state={
                사용자 지정변수1 : 초기값1,
                사용자 지정변수2 : 초기값2,
                사용자 지정변수3 : 초기값3
            };
            ///////////////////////
            this.함수명1=this.함수명1.bind(this);
            this.함수명2=this.함수명2.bind(this);
            this.함수명3=this.함수명3.bind(this);

        }//생성자 괄호 닫는부분
        //////////////////////////////////////////////////
        함수명1(){
            함수1 정의부
        }
        함수명2(){
            함수2 정의부
        }
        함수명3(){
            함수3 정의부
        }
        //////////////////////////////////////////////////
        componentDidMount(){
            이 안에 axios
        }
        //////////////////////////////////////////////////
        render(){
            return ~;
        }
        //////////////////////////////////////////////////
    }//클래스괄호 닫는부분
    */
    constructor() {
    super();//props없을떄 super(props)하면 super에 밑줄이 갈거임 그렇다고 super을 없앨게 아니라
    //super과 constructor 양쪽다 props를 없애고 비워줘야됨
    this.state={ //state의 경우 바깥에 놓으려면 그냥 state={}해도 되지만
                 //constructor 안에 넣을 경우 반드시 this.state라고 해줘야한다
  /*transactions:[{ //이것은 transactions라는 state 이름 안에다 배열하나를 넣은것으로
                        //안에 있는 데이터는 전부 배열의 첫번째 방에 해당한다
                        //이때 순서는 반드시 []안에 {} 해줘야 에러안남
        "coord": {      //그 아래의 데이터들은 api 양식을 보고 복붙한 것인데
                        //밑에있는 this.setState때 transactions:response.data 있길래
                        //기본적으로 transactions에 변수 한번찍 다 선언해줘야하는줄 알았음
                        //근데 그러지 않아도 되는거였고 결론은 필요한 변수만 하면 되기에
                        //이건 배열state 쓴 예시로 남겨놓고 대신 주석처리했다
                        //진짜 필요한건 이 transactions 주석 끝난 다음부터임 내려가봐라
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
        }], */
        temp: 0,       //여기서부턴 진짜 필요한 변수들이고 json 돌아오는 예시에는
        SeoulTemp:0,   //"main":{temp:10, ~~} 이런식으로 되어있었지만 우린 그냥
        LondonTemp:0   //우리가 쓸 변수 이름 맘대로 여기다 선언해두면된다
      };               //실제로 SeoulTemp라는 response data는 있지도 않음
                       //여기에 선언해둔 비어있는 변수에다가 axios로 실체를 담을거임
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
        .then(response =>{ //여기서 원래 에러났던 이유는 response=>{}의 {}를 빼먹고 썼기 때문이다 그거 빼먹을 경우 =>다음에 오는 것은 리턴문으로 인식됨
                            //그래서 계속 this.setState를 리턴하고 있었던것 실제로 그렇게 쓰는 경우도 있지만 그건 다음 then을 이어쓰기 위해 필요할 떄 하는 거였고
                            //우리는 리턴문 필요 없는 상태임
            this.setState({SeoulTemp:response.data.main.temp})
            console.log(this.state.SeoulTemp); //state 변수 사용시에는 this.temp말고 this.state.temp까지 해야함
        })//이때 서울과 런던 정보 둘다 가져오려면 axios를 두번 써야했고
        //앞쪽의 id는 뭔진모르겠는데 권한id같고 appid는 사이트에서 준 내 권한키 뒤에 q는 실제 변수 제어 담당하는 city name 부분이다
        )
    }

    render() {
        return (
            <div className="Weather주석판">
                <h1>온도 {this.state.temp}'c</h1><br/><br/>
                <button onClick={this.method}>지구온난화 진행하기</button><br/><br/>
                <button onClick={this.getSeoul}>서울 온도 가져오기</button> <br/><br/>
                <button onClick={this.getLondon}>런던 온도 가져오기</button>
            </div> //onClick함수 지정하는 부분에는 단순히 this.함수명 하면 되는게 아니라 {this.함수명} 이렇게 해야한다!
        );
    }
}

export default Weather주석판;