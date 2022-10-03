import React, { Component } from "react";
export default class StateMange extends Component {
    constructor() {
        super()
        this.state = {
            Count: 0
        }
        this.detile = {
            name: "mittal",
            address: "surat"
        }
        // this.Decrece = {
        //     Num: 0
        // }
    }
    UpdateDetail = () => {
        this.setState({
            name: this.detile.name = "raj",
            address: this.detile.address = "navsari"
        })
    }
    IncreceNum = () => {
        this.setState({
            Count: this.state.Count + 1
        })
    }
    DecrementNum = () => {
        this.setState({
            Count: this.state.Count - 1
        })
    }
    render() {
        return (
            <>
                <div>StateManage</div>
                <h1>Count:{this.state.Count}</h1>
                <h1>Name:{this.detile.name}</h1>
               
                <h1>Address:{this.detile.address}</h1>
                <button onClick={this.UpdateDetail}>UpdateDetail</button>
                <button onClick={this.IncreceNum}>IncreceNum</button>
                <button onClick={this.DecrementNum}>Decrement</button>
                {/* <button onClick={()=>this.setState({decrece:this.decrece.dec - 1})}>DecreceNum</button> */}
            </>
        )
    }
}