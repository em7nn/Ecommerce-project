import React from 'react'
import Form from '../components/ContactComponents/Form/Form'
import Subscribe from '../components/HomeComponents/subscribe/Subscribe'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Contact = () => {
  return (
    <div className='contact'>
      <HelmetProvider>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
          <Form />
      <Subscribe />  
    </HelmetProvider>

    </div>
  )
}

export default Contact