import React from 'react';
import './shop.css';
import Footer from '../Footer';

const Shop = () => {
  return (
    <div className="home-container">
      <div class="bg-light text-black text-center py-5">
        <div id="Shop Now" class="container">
            <h1 class="display-4">Experience Innovation with Acer Laptops</h1>
            <p class="lead">Power, performance, and precision for all your needs.</p>
            <a href="https://www.acer.com/in-en/" class="btn btn-primary btn-lg">Shop Now</a>
        </div>
    </div> 
      
      <Footer />
    </div>
  );
};

export default Shop;
