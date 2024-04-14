import ContactPage from '@/components/Contact/ContactPage'
import Footer from '@/components/shared/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import React from 'react'

const Contact = () => {
  return (
    <div className='m-6'>
      <FloatingNav/>
      <ContactPage />
    </div>
  )
}

export default Contact
