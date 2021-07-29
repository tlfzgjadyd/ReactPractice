import React, { PureComponent } from 'react';
import axios from "axios"

class NaverPay extends PureComponent {
    constructor(){
        super();
        this.state={
            "code":1,
            "message":2,
            "body":3
        }
        this.payBtnClick=this.payBtnClick.bind(this);
    }
    payBtnClick(){
        axios.get("https://nsp.pay.naver.com/sdk/js/naverpay.min.js",
       /* "data-client-id"="u86j4ripEt8LRfPGzQ8",
        "data-mode"="production",
        "data-merchant-user-key"="가맹점 사용자 식별키",
        "data-merchant-pay-key"="가맹점 주문 번호",
        "data-product-name"="상품명을 입력하세요",
        "data-total-pay-amount"="1000",
        "data-tax-scope-amount"="1000",
        "data-tax-ex-scope-amount"="0",
        "data-return-url"="사용자 결제 완료 후 결제 결과를 받을 URL"*/
        )
        .then(console.log("clicked"))
        .then(response=>{
            this.setState({code:response.data.code, message:response.data.message, body:response.data.body});
        })
    }
    render() {
        return (
            <div className="NaverPay">
                <h3>실제로 온도를 올리려면 결제를 진행하세요</h3>
               <input type="button" id="naverPayBtn" value="네이버페이 결제 버튼" onClick={this.payBtnClick}/>
            </div>
        ); //onClick에 가운데 대문자 하는거랑
           //={}하는거는 잘했음
          //this.함수명 하는것만 추가로 기억하면됨
    }
}

export default NaverPay;