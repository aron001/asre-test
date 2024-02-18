import { useState } from 'react'
import Navbar from './components/Header'
import './index.css'
import Banner from './components/Banner'
import ProductCard from './components/Product'
import Card from './components/card'
function App() {


  return (
    <>
      <continer >
        <Navbar/>
        <Banner/>
        <Card/>
        <ProductCard/>

      </continer>
     
    </>
  )
}

export default App
