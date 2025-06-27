import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Test from '@/components/testimonials/test'
import Testimonials from '@/components/testimonials/testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Testimonials/>
      <Test/>
      <Footer/>
    </div>
  )
}
