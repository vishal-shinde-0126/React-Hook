import React, { useReducer } from "react";
const initalState = 0
 // Here reqiurement is to add another counter and second counter also having same state transaction
// in this senario we need to create multiple useReducer 
const reducer = (state, action)=>{
switch (action){
    case 'increment' :
        return state +1;
    case 'decrement':
        return state -1;
    case 'reset':
        return initalState
    default :
        return state;}
}
function CounterThree(){
    const [count, dispatch] = useReducer(reducer, initalState)
    // after creating first useReducer we have to create second useReducer
    // if you defiend separate useReducer then work independent.
    const [countTwo, dispathtwo] = useReducer(reducer, initalState );
    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>dispatch('increment')}> Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>
                <div>{countTwo}</div>
                <button onClick={() => dispathtwo('increment')}> Increment</button>
                <button onClick={() => dispathtwo('decrement')}>Decrement</button>
                <button onClick={() => dispathtwo('reset')}>Reset</button>
            </div>
        </div>)
}
export default CounterThree;