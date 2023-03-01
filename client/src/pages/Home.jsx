import React from 'react'
import Explore from '../components/HomeComponents/explore/Explore'
import Intro from '../components/HomeComponents/intro/Intro'
import Latest from '../components/HomeComponents/Latest/Latest'
import Socials from '../components/HomeComponents/socials/Socials'
import Subscribe from '../components/HomeComponents/subscribe/Subscribe'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Home = () => {
  return (
    <div className='home'>
      <HelmetProvider>
      <Helmet>
        <title>EuShop - Online Shopping</title>
      </Helmet>
       <Intro />
     <Latest />
     <Explore/>
     <Socials/>
     <Subscribe/>
    </HelmetProvider>
    
    </div>
  )
}

export default Home