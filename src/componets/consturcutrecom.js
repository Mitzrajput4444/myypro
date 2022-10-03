import React from "react";
export class ConstructrClass extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"mittal",
            age:28
        }
    }
    render(){
        return(
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1>

            </div>
        )
    }
}