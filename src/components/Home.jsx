import React from 'react'
import Newsletter from './Newsletter'
import Signup from './Signup'
import Features from './Features'
import Pricing from './Pricing'
import Categories from './Categories'

const Home = () => {
  return (
    <div>
        <Features/>
        <Categories/>
        <Signup/>
        <Pricing/>
        <Newsletter/>
    </div>
  )
}

export default Home