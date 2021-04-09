import React, { Component } from 'react';
import Header from './Header';

//Before Hooks Can't use state in Function Component 
export default class AppClass extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
      title:'',
      check:0
    };
    /*Solve */
   //Method 1 
    this.countUp=this.countUp.bind(this);//bind==>Change Context (Countup Calling in Another Context)[without bind this==>undefined]
    this.handle_Title=this.handle_Title.bind(this);
   //Method 2
   //using countup=()=>{} arrow Function
  }
  componentDidMount(){
    console.log("DiD Mount");
  }
  componentDidUpdate(){
    console.log("DiD Update");
    if(this.state.check==1){
      document.title=`You have clicked ${this.state.counter} Times `;

    }
    else if(this.state.check==2){
      document.title=this.state.title;
    }
    
    
  }
  countUp(){
    //console.log(this);
    this.setState({counter:++this.state.counter});//
    this.setState({check:1});
  };
  handle_Title(){
    this.setState({title:'Mina Title'});
    console.log(this.state.title);
    this.setState({check:2});
  }
  render(){
    return(
      <div className="container text-center pt-5">
        <button className="btn btn-primary mx-3" onClick={this.countUp}>Count UP + </button>
        <button className="btn btn-primary mx-3" onClick={this.handle_Title}>Change Title</button>
        <h1 className="mt-3">{this.state.counter}</h1>
      </div>   
    )};
}