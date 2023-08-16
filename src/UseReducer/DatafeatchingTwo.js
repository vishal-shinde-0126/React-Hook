import React from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
// first you need to import useReducer and defined function used reducer it contaion two parameter
// first is reducer funciton and  second on is action
// here we have to defined the all the properties in single object
// defined the reducer function it contaion two argument action and state 
const initialState = {
    loading: true,
    error: '',
    post: {}

}
// reducer funcion return the update state.
const reducer = (state, action) => {
    switch (action.type) {
        case 'Featching_sucess':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Featching_error':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong....'

            }
        default:
            return state;
    }
}
useEffect(() => {
    axios.get('url').then((response) => {
        dispatch({ type: 'Featching_sucess', payload: response.data })
    }).catch(error => {
        console.log('something wentwrong...')
        dispatch({ type: 'Featching_error', payload: '' })



    })
}, []) // empty array show the dependency array ensure api call only once.
function DatafeatchingTwo() {
    // Here we have to defined the useReducer function that store the initialstate and dispatch as
    // updated state
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {/* here we have to defined because this are all part of the state objects. */}
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}