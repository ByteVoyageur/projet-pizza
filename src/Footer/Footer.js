// Footer.js
import React from 'react'
import './Footer.scss'
import logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={logo} alt='Logo' className='footer__logo' />
        <p>
          © 2024 La Flambée Italienne.
          <br /> All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
