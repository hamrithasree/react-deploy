import React from 'react';
import './contact.css';
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
      <div className="container my-5">
          <div className="row">
              <div id="Contact Us" className="col-md-6">
                  <h3>Contact Us</h3>
                  <p>Phone: +1 234 567 8901</p>
                  <p>Email: <a href="mailto:contact@acer.com">contact@acer.com</a></p>
                  <p>Address: 123 Acer Avenue, Silicon Valley, India</p> 
              </div>
              <div className="col-md-6">
                  <h2 className="mb-4">Get in Touch</h2>
                  <form>
                      <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="name"
                            placeholder="Enter your name"
                          />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control form-control-sm"
                            id="email"
                            placeholder="Enter your email"
                          />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="comments" className="form-label">Comments</label>
                          <textarea
                            className="form-control form-control-sm"
                            id="comments"
                            rows="5"
                            placeholder="Write Comments"
                          ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                  </form>
              </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
