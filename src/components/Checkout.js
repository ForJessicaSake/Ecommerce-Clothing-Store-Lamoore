import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <section className='checkout'>
            <h3>Hi, thanks for checking out this Web application. Sadly there's no backend to this. Kindly  return to the home page using the link below</h3>
            <Link to='/'> <p> HomePage....</p></Link>
        </section>)
}

export default Checkout