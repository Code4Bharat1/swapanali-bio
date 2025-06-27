import Contact from '@/components/contact/contact'
import Form from '@/components/contact/form'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  )
}
