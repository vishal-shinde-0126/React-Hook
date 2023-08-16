import React, { useEffect, useState } from "react";
function HookCounterOne() {
    const [count, setCount] = useState(0);
    // here we have to defind name as state based on that i have perform conditonal useEffect called
    const  [name, setName] = useState('');
    useEffect(() => {
        console.log("effect called...");
        document.title = `update counter ${count} on click`
        // in function component if you perform the conditional useeffect run than you need to pass second 
        //2nd parameter to useEffect function as an array []
        //and in this parameter pass props or state that we need to watch for it.
    },[count])
    return (
        <div>
            {/* here you type in input field its called useEffect each and every time so its not optimal
            so to optimize or you perform conditional rendering of useEffect to imporve the performances */}
            <input type="text" vlaue={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>)}
export default HookCounterOne;