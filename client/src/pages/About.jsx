import React from 'react'
import AboutUs from '../components/AboutComponents/AboutUs/AboutUs'
import Subscribe from '../components/HomeComponents/subscribe/Subscribe'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const About = () => {
  return (
    <div className='about'>
      <HelmetProvider>
      <Helmet>
        <title>About Us</title>
      </Helmet>
       <AboutUs/>
        <Subscribe/>
    </HelmetProvider>
    </div>
  )
}

export default About