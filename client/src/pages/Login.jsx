import React from 'react'
import Loginn from '../components/Login/Loginn'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Login = () => {
  return (
    <div className='login'>
      <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
              <Loginn/>
    </HelmetProvider>

    </div>
  )
}

export default Login