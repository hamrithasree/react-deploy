import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Home from "./components/Home";
import Review from "./components/review";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Watch from "./components/watch";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // eslint-disable-next-line
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router basename="/react-deploy">
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/review" element={<Review />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          
                  </Routes>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;
