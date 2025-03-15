import React from 'react'
import { useState } from 'react'

import StrategySection from '../components/StrategySection'
import CansDisplay from '../components/CansDisplay'
import BrandingSection from '../components/BrandingSection'
import BrandingShowcase from '../components/BrandingShowcase'
import HeroSection from '../components/HeroSection'
import AgencyStats from '../components/AgencyStats'
import ImageCarousel from '../components/ImageCarousel'
import LaunchBrand from '../components/LaunchBrand'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import Client from '../components/Client'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <div>
    <AgencyStats/>
    <CansDisplay/>
    <BrandingSection/>
    <ImageCarousel/>
    <StrategySection/>
    <BrandingShowcase/>
    <LaunchBrand/>
    <HeroSection/>
    <Client/>
    <TestimonialsCarousel/>
    <ContactForm/>
    </div>
  )
}

export default Home