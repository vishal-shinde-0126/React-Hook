
import React from "react";
import useCounter from "./useCounterHook";
function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0)
    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(pre => pre + 1)
    // }
    // const decrement = () => {
    //     setCount(pre => pre - 1)
    // }
    // const reset = () => {
    //     setCount(0)
    // }
    return (
        <div>
            <div>counter vlaue = {count}</div>
            <button onClick={increment}> increment the counter</button>
            <button onClick={decrement}>decrement the counter</button>
            <button onClick={reset}> reset </button>
        </div>
    )
}
export default CounterOne;