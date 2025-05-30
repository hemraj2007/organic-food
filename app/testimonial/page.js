// ✅ Header.jsx
'use client';
import React from 'react';

const testimonial = () => {
  return (
<>
  <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
      <h1 className="display-3 mb-3 animated slideInDown">Testimonial</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a className="text-body" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-body" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-dark active" aria-current="page">
            Testimonial
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Testimonial Start */}
  <div className="container-fluid bg-light bg-icon py-6">
    <div className="container">
      <div
        className="section-header text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <h1 className="display-5 mb-3">Customer Review</h1>
        <p>
          Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
          justo sed rebum vero dolor duo.
        </p>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="testimonial-item position-relative bg-white p-5 mt-4">
          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="flex-shrink-0 rounded-circle"
              src="img/testimonial-1.jpg"
              alt=""
            />
            <div className="ms-3">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item position-relative bg-white p-5 mt-4">
          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="flex-shrink-0 rounded-circle"
              src="img/testimonial-2.jpg"
              alt=""
            />
            <div className="ms-3">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item position-relative bg-white p-5 mt-4">
          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="flex-shrink-0 rounded-circle"
              src="img/testimonial-3.jpg"
              alt=""
            />
            <div className="ms-3">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item position-relative bg-white p-5 mt-4">
          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
            amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="flex-shrink-0 rounded-circle"
              src="img/testimonial-4.jpg"
              alt=""
            />
            <div className="ms-3">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Footer Start */}

  {/* Footer End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>

  );
};

export default testimonial;

