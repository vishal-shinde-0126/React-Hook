import React from "react";
// here we have to pass props as handaledClick and childern
function Button({handleClick, childern}){
    console.log('rendering button - ', childern)
    return(
        
            <button onClick={handleClick}>{childern}</button>

    
    )
}
//React.memo is higher order component that is prevent functional component
// from being re render if its props and state do not chage 
export default React.memo(Button);