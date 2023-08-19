import React, {useEffect,useRef} from "react";

function FocusInput(){ 
    //here we have to defined the useRef used to access the input field
    const inputVaalue = useRef(null)
    //Here difined the function to button
    const handaledClick = (()=>{
        console.log(inputVaalue.current);
        inputVaalue.current.style.width = "300px";
        // by accesing the dom element or node 
        inputVaalue.current.focus()
    })
    useEffect(()=>{
    // focus on the input value
    inputVaalue.current.focus() 
    // this is have to access actual elment
    },[])
    return(
        <div>
            <h1>useRef Hook</h1>
            <input ref={inputVaalue} type="text"></input>
            <button onClick={handledclick}></button>
        </div>
    )
}
export default FocusInput;
// first we need to implement the component did mount dehaviour as we 
// want foucus on only once and that is after componnet has mounted.