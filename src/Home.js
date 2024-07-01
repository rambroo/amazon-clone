import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Monthlyprimedays/GW/PC/Premium_Deco_3000._CB557627806_.jpg" alt="Image not Found" />    
      
        <div className="home__row">
          <Product id={1} title='The Lean startup' price={29.99} image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
          <Product id={2} title='Craftland Wooden Handcrafted (Crafted/Jali) hut Shaped Coaster Set of 6 for Kitchen/Dining Table Decorative Item for Table/Home' price={3.5} image="https://m.media-amazon.com/images/I/81hIREBJz3L._SX679_.jpg" rating={5}/>
        </div>

        <div className="home__row">
          <Product id={3} title='ASUS Vivobook Go 14 (2023)' price={73.99} image="https://m.media-amazon.com/images/I/71mQMASiF7L._SX679_.jpg" rating={5}/>
          <Product id={4} title='Iphone13 (128GB) Blue' price={58.49} image="https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
          <Product id={5} title='ETZIN Wireless USB C to HDMI Display Adapter ' price={25.89} image="https://m.media-amazon.com/images/I/51gZPjMtOCL._SX522_.jpg" rating={5}/>
        </div>

        <div className="home__row">
          <Product id={6} title='LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)' price={99.99} image="https://m.media-amazon.com/images/I/71h9uztgBhL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
        </div>
      </div>
    </div>

  )
}

export default Home
