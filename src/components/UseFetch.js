import { useState, useEffect, useReducer } from 'react'

function UseFetch(url) {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [cart, setCart] = useState(null)


    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case "Increment": return count + 1;
    //         case "Decrement": return count - 1;
    //         default: throw new Error();
    //     }
    // }
    // const ACTION = {
    //     INCREMENT: "Increment",
    //     DECREMENT: "Decrement"
    // }

    // const [count, dispatch] = useReducer(reducer,  0 )
  
    // const increment = () => {
    //     dispatch({type: ACTION.INCREMENT})
    // }

    // const decrement = () => {
    //     dispatch({ type: ACTION.DECREMENT })
    // }
const handleCart =(e)=>{
    const cartItems ={data};
    console.log(); 
    setCount(count + 1)


}
        const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    useEffect(() => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('could not reach resource')
                }
                return response.json()
            }).then((data) => {
                setData(data);
                setError(null)
                setIsPending(false)
            }).catch((err) => {
                setError(err.message)
                setIsPending(false)
            })
    }, [url])
    return (
        { count, isPending, error, data, increment, decrement }
    )
}

export default UseFetch;