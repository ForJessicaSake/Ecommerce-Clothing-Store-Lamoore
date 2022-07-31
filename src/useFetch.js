import { useEffect, useState } from 'react'

function useFetch(url) {
  const abortfunction = new AbortController()

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    fetch(url, { signal: abortfunction.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('could not fetch data from the resources end point')
        }
        return response.json();
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
        setIsPending(false)
        setError(err.message)
      })
  }, [url, abortfunction.signal]);

  return (
    { data, isPending, error }
  )
}

export default useFetch;