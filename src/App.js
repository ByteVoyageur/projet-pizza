import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
