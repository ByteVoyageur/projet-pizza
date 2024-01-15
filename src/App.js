//App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import Menu from './Menu/Menu'
import Sushi from './Sushi/Sushi'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/sushi' element={<Sushi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
