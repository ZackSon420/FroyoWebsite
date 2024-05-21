"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Button from "../ui/button"
import { Fuggles } from "next/font/google"
import React from 'react';

// FONT FOR 'WELCOME' TEXT
const fuggles = Fuggles({
  subsets: ['latin'],
  weight: ['400']
})

// DATA FOR HERO SECTION
const heroData = [
  {
    id: 1,
    title: 'Maykef Froyo Bangi',
    description: "Discover a world of delightful frozen treats with Maykef Froyo.",
    image: "/froyo1.jpg",
  },
  {
    id: 2,
    title: 'Pasta Perfection in Every Bite',
    description: "At our Italian restaurant, we believe every pasta dish should be perfection. Join us for a taste of culinary excellence.",
    image: "/froyo2.jpg",
  },

]

const Hero = () => {

  // STATE FOR HERO SLIDER
  const [currentSlide, setCurrentSlide] = useState(0)
  const phoneNumber = '+60173247195';

  // Message to be sent to WhatsApp
  const message = 'Hi, Saya berminat untuk tempah Froyo Maykef!';

  // URL for WhatsApp API
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1)),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='lg:h-[calc(100vh-370px)] h-[calc(100vh-140px)] md:h-[calc(100vh-390px)] flex justify-center'>
      {/* BACKGROUND IMAGES */}
      <div className='absolute z-0 w-full h-[calc(100vh-140px)] md:h-[calc(100vh-280px)] lg:h-[calc(100vh-260px)] md:top-0'>
        <Image src={heroData[0].image} fill className='object-cover' loading='lazy' />
      </div>

      {/* HERO CONTENT */}
      <div className='absolute z-20 flex flex-col items-center justify-center h-1/2 gap-5 text-center px-[20px] md:mt-[50px] mt-[120px] lg:mt-[20px] md:max-w-[600px] lg:max-w-[800px]'>
      <h1 className={`${fuggles.className} text-[80px] md:text-[90px] lg:text-[100px] text-black`}>
          welcome
        </h1>
        <div className='text-2xl font-semibold md:text-4xl lg:text-5xl text-black'>
          {heroData[0].title}
        </div>
        <div className='text-base md:text-xl lg:text-2xl font-medium text-black'>
          {heroData[0].description}
        </div>

        {/* BUTTON--SHADCN-UI */}
        <div className='flex gap-4'>
          
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" >
            <Button
              text={'Order Now'}
              bgcolor={'bg-black'}
              textcolor={'text-white'}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero