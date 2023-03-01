import React from 'react'
import Registerr from '../components/Register/Registerr'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Register = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
            <Registerr/>
    </HelmetProvider>
    </div>
  )
}

export default Register