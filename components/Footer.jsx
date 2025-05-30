'use client';

import React from 'react';

export default function Footer() {
  return (
    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Brand Section */}
          <div className="col-lg-3 col-md-6">
            <h1 className="fw-bold text-primary mb-4">
              F<span className="text-secondary">oo</span>dy
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#!">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#!">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#!">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-0" href="#!">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p>
              <i className="fa fa-map-marker-alt me-3" />
              123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-3" />
              +012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-3" />
              info@example.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <a className="btn btn-link" href="#!">
              About Us
            </a>
            <a className="btn btn-link" href="#!">
              Contact Us
            </a>
            <a className="btn btn-link" href="#!">
              Our Services
            </a>
            <a className="btn btn-link" href="#!">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="#!">
              Support
            </a>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a href="#!">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://htmlcodex.com" target="_blank" rel="noopener noreferrer">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
