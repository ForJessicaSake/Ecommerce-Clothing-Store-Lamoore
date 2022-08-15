import { useState, useEffect } from 'react'

function UseFetch(url) {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

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