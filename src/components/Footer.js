import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer' id='contact'>
      <p>@ 2022 Lamoore. All rights reserved</p>
      <section className="footer-icons">
        <BsTwitter />     <BsGithub />  <BsLinkedin/> </section>
    </footer>
  )
}

export default Footer