import React from 'react'
import Hero from '../../organism/HeroSection/Hero'
import CompanySection from '../../organism/TrustedCompany/ComponySection'
import Facility from '../../organism/FacilitySection/Facility'
import Testimonial from '../../organism/Testimonial/Testimonial'
import Banner from '../../organism/BannerSection/Banner'
const Home = () => {
  return (
    <>
    <Hero/>
    <CompanySection/>
    <Facility/>
    <Testimonial/>
    <Banner/>
    </>
  )
}

export default Home