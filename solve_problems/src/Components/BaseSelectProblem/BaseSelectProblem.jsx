import React, { PureComponent } from 'react';
import "./BaseSelectProblem.css"
import axios from "axios"
class BaseSelectProblem extends PureComponent {
    constructor(){
        super();
        this.state={
            selected:" ",
            id0 : " ",
            name0 : " ",
            types0:" ",
            id1 : " ",
            name1 : " ",
            types1:" ",
            id2 : " ",
            name2 : " ",
            types2:" "
        }
        this.selectedColor=this.selectedColor.bind(this);   
    }
    selectedColor(event){
       // console.log(event.target.className);
       if(this.state.selected!=" ")
       {
        this.state.selected.className="nonActive" 
        console.log(this.state.selected.className);
       } 
       event.target.className="active";
       // console.log(event.target.className);
        this.setState({selected : event.target});
    }
    componentDidMount(){
        axios.get('https://api.banchango.shop/v1/warehouses')
        .then(response=>{
            console.log(response);
            this.setState({
                           id0 : response.data.warehouses[0].id,
                           name0 : response.data.warehouses[0].name,
                           types0 : response.data.warehouses[0].types,
                           id1 : response.data.warehouses[1].id,
                           name1 : response.data.warehouses[1].name,
                           types1 : response.data.warehouses[1].types,
                           id2 : response.data.warehouses[2].id,
                           name2 : response.data.warehouses[2].name,
                           types2 : response.data.warehouses[2].types,
                        });
        });
    }
    componentDidUpdate(){
        console.log(this.state.id1);
        console.log(this.state.selected);
    }

    render() {
        return (
            <div className= "BaseSelectProblem">
                 <ol id="baseList">
                     <li className="nonActive" onClick={this.selectedColor}>{this.state.name0} ( {this.state.types0} )</li>
                     <li className="nonActive" onClick={this.selectedColor}>{this.state.name1} ( {this.state.types1} )</li>
                     <li className="nonActive" onClick={this.selectedColor}>{this.state.name2} ( {this.state.types2} )</li>
                 </ol>
            </div>
        );
    }
}

export default BaseSelectProblem;