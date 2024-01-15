import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />
      <nav className='header__nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link> {/* Home link */}
          </li>
          <li>
            <Link to='/menu'>Menu</Link> {/* Link to the Menu page */}
          </li>
          <li>
            <Link to='/about'>Panier</Link>{' '}
            {/* Assuming this is another page */}
          </li>{' '}
          {/* This closing tag was missing */}
        </ul>{' '}
        {/* This closing tag was missing */}
      </nav>
    </header>
  )
}

export default Header
