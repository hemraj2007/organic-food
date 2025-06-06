// ✅ Header.jsx
'use client';
import React from 'react';

const error = () => {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">404 Error</h1>
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
                                404 Error
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* 404 Start */}
            <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">
                                We’re sorry, the page you have looked for does not exist in our
                                website! Maybe go to our home page or try to use a search?
                            </p>
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                Go Back To Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}
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

export default error;
