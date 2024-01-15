// HomePage.js
import React from 'react'
import './HomePage.scss'
import AnimatedNumber from './AnimatedNumber'
const HomePage = () => {
  return (
    <div className='homepage'>
      <section className='homepage__hero'>
        <h1>Bienvenue à La Flambée Italienne</h1>
        <p>
          Célébrant <br />
          <AnimatedNumber /> ans de saveurs italiennes authentiques
        </p>
      </section>
      <section className='homepage__offer'>
        <div className='offer-content'>
          {' '}
          {/* 新增加的内容容器 */}
          <h2>Pizzas artisanales au feu de bois</h2>
          <p>La 11e et la 21e PIZZA GRATUITES</p>
          <p>Fermé lundi et mardi</p>
          <address>
            28, avenue Jules-Pelissier (Rte d'Albi) - RÉALMONT
            <br />
            Tel: 05 63 55 41 89
          </address>
        </div>
      </section>
    </div>
  )
}

export default HomePage
