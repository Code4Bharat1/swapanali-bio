import Contact from '@/components/contact/contact'
import Form from '@/components/contact/form'
import ContactMobile from '@/components/contact/mobilecontact'
import FormMobile from '@/components/contact/mobileform'
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
      <Contact/>
      <Form/>
      <Footer/>
    </div>
    <div className="block md:hidden">
      <NavbarMobile/>
      <ContactMobile/>
      <FormMobile/>
      <FooterMobile/>
      
      </div>
    </div>
  )
}
