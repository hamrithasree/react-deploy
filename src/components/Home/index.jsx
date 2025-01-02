import React, { useState, useEffect } from "react";
import "./home.css"; // Import CSS file for styling

const Slideshow = () => {
  const images = [
    "https://tavesper.tech/wp-content/uploads/2021/06/Acer-Aspire-3_Visual.jpg",
    "https://www.soyacincau.com/wp-content/uploads/2020/11/Acer-Aspire-5_Promotion-3000x1576.png",
    "https://www.soyacincau.com/wp-content/uploads/2020/11/Acer-Swift-3X-promotion.jpg",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
    // eslint-disable-next-line
  }, []);

  return (
    <div className="slideshow-container">
      <img
        className="slideshow-image"
        src={images[currentIndex]}
        alt={`Slideshow ${currentIndex + 1}`}
      />
      <div className="slideshow-controls">
        <button className="prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&#10094;</button>
        <button className="next" onClick={nextImage}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;
