import React from 'react'
import express from '../Images/expressyrs.jpg'

function About() {
    return (
        <main className='about' id ='about'>
            <section className="about-image">
                <img src={express} alt='group of teens' className='group-image' />
            </section>
            <section className="about-text">
                <h1>Lamoore</h1>
                <section className='about-text-p'>
                    <p>Is a  street fashion brand based in Nigeria.</p>
                    <p>Our goal is to make your life real by giving you clothing styles that boosts your innercore and willpower, making you the stylish person you've always longed to be.</p>
                    <p>Clothes emphasize your uniqueness and love of freedom and that is why we create only the styles that you'd like. Our customers do not have to be copies of others, so we follow a clear plan to turn ideas into things.</p>
                </section>
            </section>
        </main>
    )
}

export default About