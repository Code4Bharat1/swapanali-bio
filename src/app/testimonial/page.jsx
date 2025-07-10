
import Footer from '@/components/layout/footer'
import FooterMobile from '@/components/layout/mobilefooter'
import NavbarMobile from '@/components/layout/mobilenavbar'
import Navbar from '@/components/layout/navbar'
import TestMobile from '@/components/testimonials/mobiletest'
import TestimonialsMobile from '@/components/testimonials/mobiletestimonials'
import Test from '@/components/testimonials/test'
import Testimonials from '@/components/testimonials/testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar/>
        <Testimonials/>
      <Test/>
      <Footer/>
    </div>
    <div className="block md:hidden">
      <NavbarMobile/>
      <TestimonialsMobile/>
    <TestMobile/>
    <FooterMobile/>
    </div>
    </div>
  )
}
