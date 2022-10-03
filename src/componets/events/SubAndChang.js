import React, { Component } from "react";
export default class SubAndChang extends Component {
    constructor() {
        super()
        this.state = {
            namee: null,
            data: null
        }
    }
    HandleChange = (e) => {
        this.setState({
            namee: e.target.value
        })
    }

    HandleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            data:this.state.namee
        })
    }
    render(){
        return(
            <>
            <h1>name:{this.state.data}</h1>
            <form onSubmit={this.HandleSubmit}>
                <input type="text" onChange={this.HandleChange}/>
                <button>Submit</button>
            </form>
            </>
        )
    }
} 