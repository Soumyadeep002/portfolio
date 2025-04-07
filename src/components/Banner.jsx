import React from 'react'
import MyImage from '../assets/img/home-banner.jpg'

export default function Banner() {
  return (
      
      <section id="home" data-scroll-index="0" className="home-banner">
        <div className="social-share nav d-none d-lg-flex">
            <a href="#">
                <i className="bi bi-facebook"></i>
            </a>
            <a target='_blank' href="https://github.com/Soumyadeep002">
                <i className="bi bi-github"></i>
            </a>
            <a href="#">
                <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
        <div className="placeholder">
            <h5>S<br />O<br />U<br />M <br />Y<br />A</h5>
        </div>
        <div className="container">
            <div className="row min-vh-100 align-items-center">
                <div className="col-lg-6">
                    <div className="typo-box">
                        <h6>Hi There, I'm</h6>
                        <h1 className="font-alt">Soumyadeep</h1>
                        <h2>Freelance <span id="type-it"></span></h2>
                        <p>The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</p>
                        <div className="btn-bar">
                            <a className="px-btn px-btn-white" href="#">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="home-avatar-box">
                        <div className="home-avatar-in">
                            <img src={MyImage} title="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-ani dark-text-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 40" preserveAspectRatio="none">
                <path fill="currentColor" d="">
                    <animate attributeName="d" begin="0s" dur="10s" repeatCount="indefinite" values="
                    M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;
                    M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;
                    M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;
                    M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"></animate>
                </path>
            </svg>
        </div>
    </section>
  )
}
