import React from 'react'
import Accountt from '../components/Account/Accountt'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Account = () => {
  return (
    <div className='account'>
      <HelmetProvider>
      <Helmet>
        <title>Your Account</title>
      </Helmet>
              <Accountt/>
    </HelmetProvider>
    </div>
  )
}

export default Account