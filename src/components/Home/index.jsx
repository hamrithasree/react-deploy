import React from 'react';
import './home.css';
import Footer from '../Footer';
const Home = () => {
  return (
    <div id="slideshow" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://tavesper.tech/wp-content/uploads/2021/06/Acer-Aspire-3_Visual.jpg"
            className="d-block w-100"
            alt="Acer Aspire 3 Laptop"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.soyacincau.com/wp-content/uploads/2020/11/Acer-Aspire-5_Promotion-3000x1576.png"
            className="d-block w-100"
            alt="Acer Aspire 5 Laptop"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.soyacincau.com/wp-content/uploads/2020/11/Acer-Swift-3X-promotion.jpg"
            className="d-block w-100"
            alt="Acer Swift 3X Laptop"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slideshow"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slideshow"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
      <Footer />
    </div>
  );
};

export default Home;
