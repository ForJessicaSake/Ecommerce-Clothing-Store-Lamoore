import React from 'react'

function Location() {
    return (
        <main className='location-container'>
            <nav className='location-nav'>
                <section className='shop'>
                    <h1>Shop</h1>
                    <ul>
                        <li>For Women</li>
                        <li>For Men</li>
                        <li>For Teens</li>
                    </ul>
                </section>
                <section className='company'>
                    <h1>Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy & cookie</li>
                        <li>Shipping Info</li>
                    </ul>
                </section>
            </nav>
            <section className='map'>
                <img  alt='map'/>
                <p>Nigeria, Lagos Ikeja, St 4, 101110</p>
                <p>Customer care @lamoore.com</p>
                <p>+234 8556 33544 2000</p>
            </section>
           
        </main>
    )
}

export default Location