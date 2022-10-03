import React, { Component } from "react";
export default class Lyfcycle extends Component {
    constructor() {
        super()
        this.state = {
            
            Count: 0
        }
       
        console.log("consturctor call.....")

    }
  
    DecreceNum = () => {
        this.setState({
            Count: this.state.Count - 1
        })
    }
    render() {
        console.log("render call...")
        return (
            <>
                <div>Lyfcycle</div>
                <h1>Count:{this.state.Count}</h1>
                <button onClick={this.DecreceNum}>DecreceNum</button>
            </>
        )
    }
    componentDidMount() {
        console.log("didMount Call")
    }
    componentDidUpdate() {
        console.log("updated")
    }
    componentWillUnmount() {
        console.log("unmountdate")
    }
}