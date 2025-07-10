import Footer from '@/components/layout/footer'
import FooterMobile from '@/components/layout/mobilefooter'
import NavbarMobile from '@/components/layout/mobilenavbar'
import Navbar from '@/components/layout/navbar'
import Media from '@/components/media/media'
import HeroSectionMobile from '@/components/media/mobilemedia'
import PhotoGalleryMobile from '@/components/media/mobilephoto'
import Photo from '@/components/media/photo'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar/>
        <Media/>
        <Photo/>
        <Footer/>
        </div>
      <div className="block md:hidden">
        <NavbarMobile/>
        <HeroSectionMobile/>
        <PhotoGalleryMobile/>
        <FooterMobile/>
    </div>
    </div>
  )
}
