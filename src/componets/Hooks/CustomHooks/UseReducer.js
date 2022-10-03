import { useReducer } from "react";
const initialState = {
    count:0
}
const reducer = (state,action) =>{
    if(action.type === 'inc'){
        return {count:state.count + 1}

    }
    else if(action.type === 'dec'){
        return {count:state.count - 1}
    }
    return state
}
export default function UseReducer(){
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <>
                <div>USeREducer</div>
                <h1>Count: {state.count}</h1>
                <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
                <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
        </>
    )
}