
import React,{ useReducer } from 'react';
import './App.css';
import CounterX from './UseReducer/CounterX';
import CounterY from './UseReducer/CounterY';
import CounterZ from './UseReducer/CounterZ';
import Datafeatching from './UseReducer/Datafeatching'
export const CountContext = React.createContext()
// so we need to proved this contest with value so in app component we need to create provider to 
// wrap everything in context.provider 
const InitialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decremetn':
      return state - 1;
    case 'reset':
      return InitialState;
    default:
      return state;
  }}
function App() {
  const [count, dispatch] = useReducer(reducer, InitialState)
  // we dont want to perform any aciton on app.js we want to able to action dispatch for nested component
  // this is where begin the step number two 
  // you make of context to used provide count value and dispatch method in consume the same from the nested component 
  // so first we need to create context api using the creatContext api

  return (
    // inside the context.provide we have to specify the value attribute 
    // so we havet to prived count value as well as dispatch metho 
    <CountContext.Provider value={{
      countState: count,
      countdispatch : dispatch
    }}>
      <div>
      <div>
        {count}</div>
        {/* so we have to used context hook to consumte the state and dispatch method  */}

      <CounterX />
        <CounterY />
        <CounterZ />
        <Datafeatching/>
</div>
</CountContext.Provider>
  );
}
export default App;
