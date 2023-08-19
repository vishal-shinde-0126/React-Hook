
import React from "react";
import { useState } from "react";
// here we have to update the document title when count updated 
import UseDocumentTitleHook from '../CustomHook/useDocumentTitleHook'

function DocTitletwo(){
    const [count, setCount] = useState(0)
    // useEffect(()=>{
    //     document.title = `count value -${count}`
    // })
    UseDocumentTitleHook(count)
    return(
        <div>
            <button onClick={()=>setCount(count +1)}>Count value - {count}</button>
        </div>
    )
}
export default DocTitletwo;