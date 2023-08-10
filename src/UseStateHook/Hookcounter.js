import { useState } from "react"
import React from "react"
function HookCounter() {
    // hook are function just call the function and accept an argument with initial value
    // return the state value of the property and return method to capable to updating the state of the proerty 
    const [state, setState] = useState(0);

    return (
        <div>
            <button onClick={() => setState(state + 1)}> count
                {state} </button>
        </div>
    )
}
export default HookCounter;

// * react hook is special type function used to hook into react feature in functional component
// * useState() Hook : basically used to maintain state of the component.

// * there are three step to create class component
// 1.to create class component
// 2. create state variabel and initialize with 0
// 3. create method to capeble for update the state value.  

// how to set state based on previous state.