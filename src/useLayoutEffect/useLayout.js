import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react'
function UseLayout() {
    const [Toggle, setToggle] = useState(false)
    // here we have to used react useLayout effect
    // same work as useEffect but useEffect run synchronouslly and useLayoutEffect run 
    // asynchronouslly also it always run first (before the rendering the element)

    // to calculate the daimention you need to aceess the dom elment with the help of useRef
    const textref = useRef()
    // useLayoutEffect(()=>{
    //     console.log('useLayoutEffect')
    // },[Toggle]);
                                    
    // here we have to add useEffect 
    // useEffect(()=>{
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        // by usign following method you get all the dimention of the this element.
        if (textref.current != null) {
            const daimention = textref.current.getBoundingClientRect();
            console.log('diamention', daimention)
            textref.current.style.paddingTop = `${daimention.height}px`
            // useEffect facing a problem with friction so instead of useEffect we have to used useLayoutEffect
            // so this useEffect depends upon toggle state when you chagne the state then 
            // run useEffect
        }
    }, [Toggle]);
    return (
        <div>useLayout

            <button onClick={() => {
                setToggle(!Toggle)
            }}>Toggle  </button>
            {/* and here you have to defined the useRef here */}
            {Toggle && <h4> ref={textref} code bless you</h4>}
        </div>
    )
}

export default UseLayout