// Sushi.js
import React from 'react'
import './Sushi.scss'

const Sushi = () => {
  const sushiMenu = [
    { name: 'Maki saumon 6 pièces', price: 4.5 },
    { name: 'Maki avocat 6 pièces', price: 4.0 },
    {
      name: 'California surimi 6 pièces (Ou croquant oignon frit)',
      price: 5.5,
    },
    {
      name: 'California saumon 6 pièces (Ou croquant oignon frit)',
      price: 5.5,
    },
    { name: 'California Tempura 10 pièces', price: 14.0 },
    { name: 'Futomaki 10 pièces', price: 14.0 },
    { name: 'Sushi saumon 2 pièces', price: 4.5 },
    { name: '6 maki saumon et 6 sushi saumon', price: 14.0 },
    { name: '6 california saumon et 6 sushi saumon', price: 15.5 },
    {
      name: '6 maki saumon, 6 california saumon et 6 california surimi',
      price: 18.0,
    },
    {
      name: '6 maki saumon, 6 california saumon et 6 sushi saumon',
      price: 20.0,
    },
    { name: 'Sushi saumon 6 pièces', price: 11.0 },
    { name: 'Sushi saumon 10 pièces', price: 17.0 },
    { name: '24 makis variés et 10 sushi saumon', price: 39.0 },
    { name: '30 makis variés et 18 sushi saumon', price: 59.0 },
    { name: '10 nems au porc', price: 13.0 },
  ]

  return (
    <div className='sushi-menu'>
      <h2 className='menu-subtitle'>Menu des sushis et nems</h2>
      <h3 className='menu-horaires'>
        (Disponible uniquement le samedi soir, réservation préalable requise.)
      </h3>
      <ul className='menu-list'>
        {sushiMenu.map((item, index) => (
          <li key={index} className='menu-item'>
            <span className='item-number'>N° {index + 1}</span>
            <span className='item-name'>{item.name}</span>
            <span className='item-price'>
              {item.price.toFixed(2).replace('.', ',')}€
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sushi
