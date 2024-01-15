// Menu.js
import React, { useState, useEffect } from 'react'
import CategoryBar from './CategoryBar'
import './Menu.scss'

const Menu = () => {
  const [menuItems, setMenuItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data)
        // 提取所有唯一的类别
        const uniqueCategories = [...new Set(data.map((item) => item.category))]
        setCategories(uniqueCategories)
        setFilteredItems(data) // 初始时显示所有菜品
      })
  }, [])

  const filterMenu = (category) => {
    if (category === 'All') {
      setFilteredItems(menuItems)
    } else {
      const filtered = menuItems.filter((item) => item.category === category)
      setFilteredItems(filtered)
    }
  }

  return (
    <div>
      <CategoryBar categories={categories} onCategorySelect={filterMenu} />
      <div className='menu'>
        {filteredItems.map((item) => (
          <div key={item.id} className='menu-item'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
