import React from 'react'
import couple from '../Images/couple.png'

function Subscribe() {
    return (
        <main className="subscribe-wrapper">
            <section className="subscribe-text">
                <h1>Subscribe</h1>
                <p>Do you want to get special offers and free giveaways?</p>
                <form className='int'>
                    <input className ='input'
                        type='text'
                        placeholder='Enter your email'
                    />
                    <button>Subscribe</button>
                </form>
                <input type = 'checkbox'/> <span> I agree to the privacy policy</span>
            </section>

            <section className="subscribe-image">
                <img src={couple} alt='couple' />
            </section>
        </main>)
}

export default Subscribe