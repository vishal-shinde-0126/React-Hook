// example of use stateVariable as an Array.
import React, {useState} from "react";

function HookCounterFour(){
    // here deifed state variable as item as an array and initially defined empty array
    //  and setItem is function to update variable.
    const [item,setItem]= useState([])
    const itemChanged = () =>{
        // to set the value in state variable as array dosent append automatically so you need to used
        // spread opertor to handaled manually 
        // so first defined spread opertor with item and push next object
        setItem([...item,{
            id : item.length,
            // basically it return random number between 1 and 10
            value: Math.floor(Math.random() * 10 ) + 1 }])
    }
    return(
        <div>
            <button onClick={itemChanged}>add a number </button>
           <ul>
            {
                item.map(item=>(<li key={item.id}>{item.value}</li>))
            }
           </ul>

        </div>
    )
}
export default HookCounterFour;