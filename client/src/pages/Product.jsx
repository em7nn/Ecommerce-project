import React from 'react'
import ProductDetails from '../components/ProductComponents/ProductDetails/ProductDetails'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Product = () => {
  return (
    <div className='product'>
      <HelmetProvider>
      <Helmet>
        <title>Product</title>
      </Helmet>
           <ProductDetails/> 
    </HelmetProvider>

    </div>
  )
}

export default Product