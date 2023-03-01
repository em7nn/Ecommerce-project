import React, { useEffect } from 'react'
import CartItems from '../components/CartItems/CartItems'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const user = useSelector((state) => state.user.currentUser);
    
  const navigate = useNavigate();

  useEffect(()=>{
      !user && navigate('/')
  });

  return (
    <div className='cart'> 
    <HelmetProvider>
      <Helmet>
        <title>Your Cart</title>
      </Helmet>
         <CartItems/>
    </HelmetProvider>
    </div>
  )
}

export default Cart