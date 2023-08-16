import React, { useContext } from "react";
import CounterY from "./CounterY";
import { CountContext } from "../App";

function CounterX() {
    const countContext = useContext(CountContext)
    return (
        <div>


            <div>{countContext.countState}</div>
            <button onClick={() => countContext.countdispatch('reset')}>reset</button>
            <button onClick={() => countContext.countdispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countdispatch('decremetn')}>Decrement</button>
        </div>
    )
}
export default CounterX;