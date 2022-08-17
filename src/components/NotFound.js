import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
<section className='page-error'>
    <h1>404</h1>
    <h2>Sorry</h2>
    <p>This Page could not be found</p>
    <Link to ='/'>Click here to return to Homepage....</Link>
</section>  )
}

export default NotFound