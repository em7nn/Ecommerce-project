import React from 'react'
import ProductItems from '../components/ProductComponents/ProductItems/ProductItems'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Products = () => {
  return (
    <div className='products'>
      <HelmetProvider>
      <Helmet>
        <title>Our Products</title>
      </Helmet>
              <ProductItems/>
    </HelmetProvider>

    </div>
  )
}

export default Products