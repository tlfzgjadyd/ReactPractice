import React from 'react'
import '../App.css';

class HelloWorld extends React.Component{
    render(){
        return(
            <h1>Hello{this.props.name}</h1>
        )
    }
}
export default HelloWorld