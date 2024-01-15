import React, { useState, useEffect } from 'react'

const AnimatedNumber = () => {
  const [number, setNumber] = useState(1)

  useEffect(() => {
    let interval = null

    if (number < 20) {
      interval = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1)
      }, 2500 / 20) // 完成从1到20的动画所需时间（调整为适当的速度）
    } else if (number === 20) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [number])

  // 根据数字的大小调整缩放
  const scale = number / 20 // 当数字为20时，scale为1

  return (
    <span
      style={{
        transform: `scale(${1 + scale})`,
        transition: 'transform 0.5s ease',
      }}
    >
      {number}
    </span>
  )
}

export default AnimatedNumber
