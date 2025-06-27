import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Media from '@/components/media/media'
import Photo from '@/components/media/photo'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Media/>
        <Photo/>
        <Footer/>
      
    </div>
  )
}
