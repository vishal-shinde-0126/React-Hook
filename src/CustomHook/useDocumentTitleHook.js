
// in Doctitleone and Doctitletwo componnet having same code to update the document title
// so instead of creating the same code of repetation you have to used custom hook 
import { useEffect } from "react";

function UseDocumentTitleHook(count){

    useEffect(() => {
        document.title = `count value -${count}`
    },[count])
}
export default UseDocumentTitleHook;