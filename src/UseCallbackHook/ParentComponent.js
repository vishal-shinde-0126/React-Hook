import React, { useCallback } from "react";
import CountCompnent from "./CountCompnent ";
import Title from "./Title";
import { useState } from "react";
import Button from "./Button";

function ParentComponent(){
    //defined the initial age state vlue is 25
    const [age,setAge]= useState(25);
    //defined the initial salary steate 
    const [salary,setSalary] = useState(50000);

    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age]) // here is a depndenty array to render only when the update this state 

    const incrementSalary = useCallback( () =>{
        setSalary(salary + 1000)
    },[salary]) ;
    return(
        <div>
            {/* here we have to used multiple compnent with different props */}
            <h1>ParentComponent</h1>
            <Title/>
            <CountCompnent text='age' count ={age}/>
            <Button handleClick={incrementAge} childern={'IncrementAge'}>IncrementAge</Button>
            <CountCompnent text='salary' count ={salary}/>
            {/* here we have to pass props */}
            <Button handleClick={incrementSalary} childern={'IncrementSalary'}>IncrementSalary</Button>
        </div>
    )
}
export default React.memo(ParentComponent);