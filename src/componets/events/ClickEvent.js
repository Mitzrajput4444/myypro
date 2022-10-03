import React, { Component } from "react";
export default class ClickEvent extends Component {
    constructor() {
        super()
        this.state = {
            namee: "mitu"
        }
    }
    ClickMeFun = () => {
        this.setState({
            name: this.state.namee = "Rajput"
        })
    }
    render() {
        return (
            <>
                <h1>Name:{this.state.namee}</h1>
                <button onClick={this.ClickMeFun}>Click Me...!</button>

            </>
        )
    }
}