import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import PromotionalCards from './Components/PromotionalCards'
import Products from './Components/Products'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <PromotionalCards/>
      <Products/>
    </div>
  )
}

export default Home
