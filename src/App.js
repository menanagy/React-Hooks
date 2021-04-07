import React, { Component } from 'react';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0
    };
    
  }
  countUp=()=>{
    this.setState({counter:++this.state.counter});
  };
  render(){
    return(
      <div className="container text-center pt-5">
        <button className="btn btn-primary" onClick={this.countUp}>Count UP + </button>
        <h1 className="mt-3">{this.state.counter}</h1>
      </div>   
    )};
}