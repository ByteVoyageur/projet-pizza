//App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import Menu from './Menu/Menu' // 假设您有一个 Menu 组件

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/menu' element={<Menu />} /> {/* 添加 Menu 路由 */}
            {/* 可以继续添加更多的路由 */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
