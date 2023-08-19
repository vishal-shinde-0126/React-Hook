import React, { useMemo } from "react";
import { useState } from "react";


function UsememoHook() {
    const [counterone, setCounter] = useState(0);
    const [countertwo, setCountertwo] = useState(0) 
// here we need to defined given value is odd number on even numbers
    const increment = () =>{
        setCounter(counterone +1);
    }

    const incrementTwo =() =>{
        setCountertwo(countertwo +1)
    }

    const isEven=useMemo(()=>{
        //by using useMemo hook this function used cached value  of is even function to 
        // display the value is even or odd 
        // if value not chage for counter one so no need to re-compute the odd or even value 
        // so react  used only previous value for re-render 
        let i=0;
        while(i<200000000) 
        i++
        return counterone % 2 === 0;
    }, [counterone]); //first argument is arraw function and 
    // second function is dependecy array and pass value as function dependes on value.
    return (
        <div>
            <h1>This is useMemoHook</h1>
            <div>
                <button onClick={increment}>count one = {counterone}</button>
                <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count Two = {countertwo}</button>
            </div>

        </div>
    )
}
export default UsememoHook;