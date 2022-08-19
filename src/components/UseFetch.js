import { useState, useEffect } from 'react'

function UseFetch(url) {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [cart, setCart] = useState([])


    const addToCart = (data) => {
        setCart([...cart, data])
    }
    const removeCart = (id) => {
        const _cart = cart.filter((crt) => { return crt.id !== id })
        setCart(_cart);
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

    return ({ count, isPending, error, data, decrement, addToCart, removeCart, cart, setCart })
}

export default UseFetch;