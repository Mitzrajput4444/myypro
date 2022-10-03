import React from "react";
export class ClassProps extends React.Component{
    render(){
        return(
            <h1>Name: {this.props.name}</h1>
        )
    }
}