import React from 'react';
import './review.css';
import Footer from '../Footer';

const Review = () => {
  return (
    <div className="container text-center">
      <h2>What Our Customers Say</h2>
      <div className="row mt-4">
        <div className="col-12 col-md-4">
          <blockquote className="blockquote">
            <img
              src="https://htmldemo.zcubethemes.com/bingle/img/testimonial/testi_avatar2.png"
              alt="Jane Doe"
              className="rounded-circle mb-3"
            />
            <p>"Acer laptops have transformed my work life. Exceptional quality!"</p>
            <footer className="blockquote-footer">Jane Doe</footer>
          </blockquote>
        </div>
        <div className="col-12 col-md-4">
          <blockquote className="blockquote">
            <img
              src="https://htmldemo.zcubethemes.com/bingle/img/testimonial/testi_avatar.png"
              alt="John Smith"
              className="rounded-circle mb-3"
            />
            <p>"Great performance and battery life. Highly recommend!"</p>
            <footer className="blockquote-footer">John Smith</footer>
          </blockquote>
        </div>
        <div className="col-12 col-md-4">
          <blockquote className="blockquote">
            <img
              src="https://htmldemo.zcubethemes.com/bingle/img/testimonial/testi_avatar3.png"
              alt="Peter Brown"
              className="rounded-circle mb-3"
            />
            <p>"Acer delivers every time with innovation and style."</p>
            <footer className="blockquote-footer">Peter Brown</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Review;
