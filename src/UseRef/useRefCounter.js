import React, { useEffect, useState, useRef } from 'react'
// first casue useing useRef careting mutable variable causing withou rerendering
// here we find how many numbers of count incremented when we input the name
function UseRefCounter() {
    const [name, setName] = useState("");
    //here we not have to used useState hook beacause 
    // const [count, setCount] = useState(0)
    const count = useRef(0)
    console.log(count)
    // useRef function return object with ope property like current.
    // Here count is constantely updating because when rendering the this componet 
    // this vraitable updated agian and again
    // so here we stuck in infinite loop because of useState 
    //solved this with useRef 
    useEffect(() => {
        // setCount(prvCount => prvCount + 1)
        count.current = count.current + 1
    })
    return (
        <div>useRefCounte
            {/* create input field and update name state value with current statue value  */}
            <input type='text' onChange={(e) => setName(e.target.value)} />
            {/* and update name here */}
            <h2>name : {name} </h2>
            <h2>Rendesr : {count.current}</h2>
        </div>
    )
} export default UseRefCounter