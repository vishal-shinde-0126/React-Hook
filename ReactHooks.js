// React Hook :
// *  Hooks are new feature addition in react versionn 16.8 or higher
// * which allow you to use React features without hvaing to write a class
// * example: state of components
// * hook dont write inside class
// * Hooks are completely optimize (dont contain any breaking chages and 100 % backword-compatible)
// * Hooks just a special function that lets you hook into react feature



// why used Hooks :
// * Hook avoid the whole confusion of this keyword
// * Hook allow you to reuse statful log without changing your componet higher poririty
// * Hook organised the login inside a component into reusable isolated units.

//Reack hook rule :
// * only call the hook on the top level of the react function
// * dont call hooks inside the loop, condition or nested
// * only call the hook from react function (call then from within react functional component and not just any regular javascript function )

// * Type of Hooks :
// 1.useState() : this hook used for maintain the state of the component.
// * useState() hook function then they need to call function accept an argument  with initial value
// return the state value of the property and return method to capable to updating the state of the proerty
// in following example we have to used array destructuring concept
//  const[state, setState] = useState();