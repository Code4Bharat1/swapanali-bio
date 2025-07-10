import About from '@/components/about/about'
import Circle from '@/components/about/circle'
import AboutMobile from '@/components/about/mobileabout'
import CircleMobile from '@/components/about/mobilecircle'
import Footer from '@/components/layout/footer'
import FooterMobile from '@/components/layout/mobilefooter'
import NavbarMobile from '@/components/layout/mobilenavbar'
import Navbar from '@/components/layout/navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
      <Navbar/>
      <About/>
      <Circle/>
      <Footer/>
    </div>
    <div className="block md:hidden">
      <NavbarMobile/>
      <AboutMobile/>
      <CircleMobile/>
      <FooterMobile/>
      
      
      </div>
    </div>
  )
}
