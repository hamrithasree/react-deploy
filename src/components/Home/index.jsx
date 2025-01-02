import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import Footer from '../Footer';

const Home = () => {
  const slidesRef = useRef(null);
  const [index, setIndex] = useState(0);
  const slideImages = [
    "https://tavesper.tech/wp-content/uploads/2021/06/Acer-Aspire-3_Visual.jpg",
    "https://www.soyacincau.com/wp-content/uploads/2020/11/Acer-Aspire-5_Promotion-3000x1576.png",
    "https://www.soyacincau.com/wp-content/uploads/2020/11/Acer-Swift-3X-promotion.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [slideImages.length]);

  const showSlide = (newIndex) => {
    if (newIndex < 0) {
      setIndex(slideImages.length - 1);
    } else if (newIndex >= slideImages.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div className="slider">
      <div
        ref={slidesRef}
        className="slides"
        style={{
          transform: `translateX(-${index * 100}%)`,
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {slideImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            style={{ width: '100%', height: 'auto' }}
          />
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={() => showSlide(index - 1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => showSlide(index + 1)}>
          &#10095;
        </button>
      </div>
      <div className="indicators">
        {slideImages.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => showSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
