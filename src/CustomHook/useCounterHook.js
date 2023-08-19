import { useState } from "react";

function useCounter(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(pre => pre + 1)
    }
    const decrement = () => {
        setCount(pre => pre - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return [count, increment, decrement, reset]
    // this hook return the value of the count, increment, decrement and reset 
    // so you need to accept this value using the array destructuring in required compnent
    // like const [count, increment, decrement, reset] = useCounter(0)

}
export default useCounter;