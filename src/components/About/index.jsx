import React from 'react';
import './watch.css';
import Footer from '../Footer';

const Watch = () => {
  return (
   
      <section class="bg-light py-5 text-center">
        <div id="Watch Now" class="container">
            <h2>Watch Now</h2>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6knw50WVhGY?autoplay=1&si=ImtqMhfZ0jANWj2G" width="1000" height="500" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </section>

  )
};

export default Watch;
