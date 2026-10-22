import React from 'react'
import Hero from '../components/home/Hero'
import Benefits from '../components/home/Benefits'
import ShopCategories from '../components/home/ShopCategories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import PromoBanner from '../components/home/PromoBanner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Benefits/>
      <ShopCategories/>
      <FeaturedProducts/>
      <PromoBanner/>
    </div>
  )
}

export default Home
