import React from "react";
import { useReducer } from "react";
const initalState = 0
const reducer = (state, action) => {
    // reducer function accept current state and return new state
    //so transition to happen we need somthing perform this action parameter
    // you think action as an instruction to reducer function based on what action specify the reducer function 
    // perform necessary state transaction 
    // in this example have three action reset, increment, decrement  the convention to execute code basedon the action
    // is used switch statements (so within redecer funtion body i have add switch statment )
    switch (action) {
        case 'increment ':
            return state + 1;
        case 'decremente ':
            return state - 1
        case 'reset':
            return initalState
        default:
            return state
        // this is reducer function pass to useReducer hook }
        // thired step we need to get hold of value to diplay in the jsx also it is way to display 
        // or to called reducer function for appropriate action      
    }
}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initalState);
    // here we have to create count variale to display count value in jsx used useReduce
    // here we need to import useReducer 
    // useReducer is function just like another hooks 
    // simply call is in function component
    // syntax
    // so useReducer having two argument so its not defined we need to first defined it outside component 
    // so also useReducer return pair of value so we can hold on using array destructring.
    // so useReducer return current state we have called as count paied with dispatch() method 
    // so this dispath method allows us to execute code to corresponding to perticular action
    return (
        <div>

            <div> {count}</div>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decremente')}>Decrement </button>
        </div>)
} export default CounterOne; 

