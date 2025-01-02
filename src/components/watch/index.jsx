import React from 'react';
import './watch.css';
import Footer from '../Footer';

const Watch = () => {
  return (
    <>
      <section className="bg-light py-5 text-center">
        <div id="Watch-Now" className="container">
          <h2>Watch Now</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/6knw50WVhGY?autoplay=1&si=ImtqMhfZ0jANWj2G"
              width="1000"
              height="500"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* Include Footer */}
      <Footer />
    </>
  );
};

export default Watch;
