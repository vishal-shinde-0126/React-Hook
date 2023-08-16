
import React, { useReducer } from "react";
const initial_value = {
    firstCounter: 0,
    SecondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            // instead of hardcoded value you have to write action.value
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            // instead of hardcoded value you have to write action.value
            return { ...state, SecondCounter: state.SecondCounter + action.value };
        case 'decrement2': 
            return { ...state, SecondCounter: state.SecondCounter - action.value };
        case 'reset':
            return initial_value;
        default:
            return state;
    }
};
function Counter2() {
    const [count, dispatch] = useReducer(reducer, initial_value);

    return (
        <div>
            {/* here we can alos add second property value  */}
            <div>{count.firstCounter}</div>
            <div>{count.SecondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment SecondCounter</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement SecondCounter</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
} export default Counter2;
// there are two proptery in object but changing only one at a time
// so to get the expected out put means you want to modified or updte the both counter state
// you have to add spread opertor. to mearge the modified property in state
