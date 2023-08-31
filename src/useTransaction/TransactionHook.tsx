import React from 'react'
import { useState } from 'react'

export enum Buttons {
    Normal = "normal",
    USE_TRANSITION = "useTransaction",
    USE_DEFFERED = "useDeferred",
}

export function  (){
  const[button,setButton] = useState(Buttons.Normal)
  const renderInpuit =()=>{
    if(button ===Buttons.Normal){
      return <>Normal</>

    }
    if (button === Buttons.USE_TRANSITION) {
      return<>useTransaction</>

    }
    if (button === Buttons.USE_DEFFERED) {
      return <>useDeferred</>

    }
  }
  return (
    <div>
<button>{Buttons.Normal}</button>
      <button>{Buttons.USE_TRANSITION}</button>
      <button>{Buttons.USE_DEFFERED}</button>
      <div>{renderInpuit()}</div>



    </div>
  )
}
