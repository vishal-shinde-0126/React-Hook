import React, { useEffect, useState,useRef } from "react";
// import useRef and invoked within in component amd assogmed it to variable

function Hookinterval(){
const [timer, stTimer] = useState
const intervalRef = useRef()

useEffect(()=>{
     intervalRef.current = setInterval(() => {
        //
      stTimer(pre => pre +1)  
    },1000)
    return () =>{
        clearInterval(intervalRef.current)
    }
}) 
return(
        <div>
            setTimeInter  {timer}
            {/* // here show interval not defined */}
            {/* because variable only scop to the effect hook so we clear the interval within the hook 
              but not in event Handaler  this is useRef comes into resque*/}
            <button onClick={() => clearInterval(intervalRef.current)}></button>
        </div>
        // useRef can hold refrences to the dom node using ref attribute it can also to be used to store
        // any mutable value 
        // the greata bout useRef the value persist through the rerenders while not causing any addition 
        // renders when its value changes 
        // to slove the problem attend we will used useRef hook 
        // it will create an generic container that hold an mutable value similar to the instance prperty
        // on a class component 
        // so this generic container does not cause rerender when data stored is changed 
    )
}