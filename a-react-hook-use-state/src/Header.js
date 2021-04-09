import React, { Component } from 'react';
export default class Header extends Component{
    render(){
        return(
            <h1 className="mt-3">{this.props.header}</h1>
         
        )};
}