// How to set state value on previous state value.
// useState() used
import React, { useState } from "react"

function HookCounterTwo() {
    const initialValue = 0;
    // setCount function way to give the previous state value and based on that update next value
    const [count, setCount] = useState(initialValue)
    //Here calling another function with setState() you have to get updated value.
    const incrementbyFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((previousValue) => previousValue + 1)
        }
    };
    return (
        <div>
            count : {count}
            <button onClick={() => setCount(initialValue)}> reset </button>
            <button onClick={() => setCount(count + 1)}> increment Count </button>
            <button onClick={() => setCount(count - 1)}>decrement Count</button>
            <button onClick={incrementbyFive}> increment by 5 </button>
        </div>
    )
}
export default HookCounterTwo;