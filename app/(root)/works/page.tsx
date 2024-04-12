import ContactPage from '@/components/Contact/ContactPage'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { HeroParallax } from '@/components/ui/hero-parallax'
import React from 'react'
import Image from "next/image";
// import '../../../public/image.png'

const products = [
  {
    title: "Product 1",
    link: "/product1",
    thumbnail: "/image.png",
  },
  {
    title: "Product 2",
    link: "/product2",
    thumbnail: "/image.png",
  },
  {
    title: "Product 3",
    link: "/product3",
    thumbnail: "/image.png",
  },
  // Add more products as needed
];


const Works = () => {
  return (
    <div className='m-6'>
      <FloatingNav/>
      <HeroParallax products={products} />;
    </div>
  )
}

export default Works;
