import BelowHero from '@/components/Hero/BelowHero'
import HeroSection from '@/components/Hero/HeroSection'
import { NavbarDemo } from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { DisplayScroll } from '@/components/Hero/DisplayScroll'
import { Spectrum } from '@/components/Hero/Spectrum'
import { Testmonials } from '@/components/Hero/Testimonials'
import Faq from '@/components/Hero/Faq'
import Footer from '@/components/shared/Footer'


const page = () => {

  return (
    <>
      <FloatingNav/>
      {/* <NavbarDemo/> */}
      <HeroSection />
      <BelowHero  />
      <DisplayScroll/>
      <Spectrum/>
      <Testmonials/>
      <Faq />
      <Footer/>
    </>
  )
}

export default page
