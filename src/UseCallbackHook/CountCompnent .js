import React from "react";

// here we have to pass the props like text and count as age or salary 
function CountCompnent({text, count}){
    console.log('rendering text..', count)
    return(
        <div>
            {/* here we have to rendering the props */}
            {text} - {count}
            
        </div>
    )
}
export default React.memo(CountCompnent);