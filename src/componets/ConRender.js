import React, { Component }  from "react";
export default class ConRender extends Component{
    constructor(){
        super()
        this.state = {
            IsLogIn:true
           
        }
    }
  
    render(){
        return(
            <>
            <div>ConditionRender</div>
            {this.state.IsLogIn ? <button>Logout</button> : <button>LogIn</button>}
           
            </>
        )
    }
}