// CategoryBar.js
import React from 'react'
import './CategoryBar.scss'

const CategoryBar = ({ categories, onCategorySelect }) => {
  return (
    <div className='categories'>
      <button onClick={() => onCategorySelect('All')}>All</button>
      {categories.map((category) => (
        <button key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar
