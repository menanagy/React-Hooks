import React, { Component } from 'react';
import Header from './Header';

//Before Hooks Can't use state in Function Component 
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0
    };
    /*Solve */
   //Method 1 
    this.countUp=this.countUp.bind(this);//bind==>Change Context (Countup Calling in Another Context)[without bind this==>undefined]
   //Method 2
   //using countup=()=>{} arrow Function
  }
  countUp(){
    console.log(this);
    this.setState({counter:++this.state.counter});//
  };
  render(){
    return(
      <div className="container text-center pt-5">
        <button className="btn btn-primary" onClick={this.countUp}>Count UP + </button>
        <h1 className="mt-3">{this.state.counter}</h1>
        <Header header='Hi Mina'/>
      </div>   
    )};
}