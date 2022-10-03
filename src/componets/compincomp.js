import React from "react";
 class CompInComp extends React.Component{
    render(){
        return(
                <h1>super como class</h1>
        )
    }
}
export class Student extends React.Component{
    render(){
        return(
            <div>
                <CompInComp/>
                <CompInComp/>

            </div>

        )
    }
}