import About from '@/components/about/about'
import Circle from '@/components/about/circle'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
      <About/>
      <Circle/>
      <Footer/>
    </div>
  )
}
