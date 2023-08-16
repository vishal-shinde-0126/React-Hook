
import React, { useEffect, useState } from "react";
import axios from "axios";
function Datafeatching() {
    // is used to loading flag is data featching hapning in background   
    const [Loading, setLoading] = useState(true);
    // second varible used to when something went wrong
    const [error, setError] = useState('');
    // finally create varibale to hold post data you want to featch
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('url').then((response) => {
            setLoading(false);
            setError('');
            setPost(response.data)
        }).catch(error => {
            console.log('something wentwrong...')
            setLoading(false);
            setPost({});
            setError('not found data...')



        }) }, []) // empty array show the dependency array ensure api call only once.

    return (
        <div>
            {Loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )}
export default Datafeatching;