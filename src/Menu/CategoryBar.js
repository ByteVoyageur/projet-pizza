// CategoryBar.js
import React, { useRef } from 'react'
import './CategoryBar.scss'

const CategoryBar = ({ categories, onCategorySelect }) => {
  const scrollContainerRef = useRef(null)

  // 滚动处理函数
  const scroll = (direction) => {
    const { current } = scrollContainerRef
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className='category-bar'>
      <div className='arrow left' onClick={() => scroll('left')}>
        &lt;
      </div>
      <div className='category-scroll' ref={scrollContainerRef}>
        <button
          className='category-item'
          onClick={() => onCategorySelect('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className='category-item'
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='arrow right' onClick={() => scroll('right')}>
        &gt;
      </div>
    </div>
  )
}

export default CategoryBar
