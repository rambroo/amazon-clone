import React from 'react';
import Subtotal from './Subtotal';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
function Checkout() {

  const[{basket,user} ]=useStateValue();
  const userName = user ? user.email.split('@')[0] : 'Guest';
  
  return (
    <div className='checkout'>
      <div className="checkout__left">
          <div>
              <h3>Hello, to the fake amazon created by rambroo {userName}</h3>
              <h2 className="checkout__title">Your Shopping Basket</h2>
          </div>
          <div className='checkoutProduct__items'>
          
            {basket.map(item=>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
      </div>
      <div className="checkout__right">
          <h2>The Subtotal will go here</h2>
          <Subtotal/> 
      </div>
    </div>
  )
}
export default Checkout
