// Header.js
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
            <Link to='/'>Acceuil</Link> {/* Home link */}
          </li>
          <li>
            <Link to='/menu'>Menu</Link> {/* Link to the Menu page */}
          </li>
          <li>
            <Link to='/about'>Panier</Link>{' '}
            {/* Assuming this is another page */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
