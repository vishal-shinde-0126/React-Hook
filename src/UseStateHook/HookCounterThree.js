
import React, { useState } from "react";
function HookCounterThree() {
    // here default value of an object containg firstName and LastName as empty string
    // imp : A state variable is an array, string, number, boolen and  object
    // here name is an state variable is an object and setName is function to update correspondig state
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                {/* <input type="text" value={name.firstName} onChange={(e) => setName({ firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={(e) => setName({ lastName: e.target.value })} /> */}
                {/* in onchane arrow function you have first spread name  */}

                <input type="text" value={name.firstName} onChange={(e) => setName({ ...name,firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value })} />

                <h1>your firstName is  : {name.firstName}</h1>
                <h1>Your LastName is : {name.lastName}</h1>
                {/* The following json.strigify() method used to display state variable. */}
                {/* Here show by default firstName and lastName has empty string */}
                <h1>{JSON.stringify(name)}</h1>
            </form>
        </div>
        // here having some problem regarding the object as state variable
        // when here we start writing first name property then last name property remove from the state variabe
        // vice versa
        // the reason of this problem is useState() does not automatically  merge and update the object
        // so merge to automatically you need to used spread operator to mainually merged
         )
}
export default HookCounterThree;