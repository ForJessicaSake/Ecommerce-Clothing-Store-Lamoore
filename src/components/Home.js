import React from 'react'
import Hero from './Hero'
import About from './About.js'
import Catalog from './Catalog.js'
import News from './News'
import Subscribe from './Subscribe'
import Location from './Location'
import Footer from './Footer'


function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Catalog />
      <News />
      <Subscribe />
      <Location />
      <Footer />
    </section>
  )
}

export default Home