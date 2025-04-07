import React from 'react'
import MyImage from '../assets/img/home-banner.jpg'
import MyResume from '../assets/MyResume.pdf'

export default function Banner() {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = MyResume;
        link.download = "soumyadeep_ganguly_cv.pdf";
        link.click();
      };
  return (
      
      <section id="home" data-scroll-index="0" className="home-banner">
        <div className="social-share nav d-none d-lg-flex">
            <a target='_blank' href="https://www.facebook.com/soumyadeep.ganguly.758">
                <i className="bi bi-facebook"></i>
            </a>
            <a target='_blank' href="https://github.com/Soumyadeep002">
                <i className="bi bi-github"></i>
            </a>
            <a target='_blank' href="https://www.instagram.com/soumyadeep.002/">
                <i className="bi bi-instagram"></i>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/soumyadeep-ganguly-76652822a/">
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
                        <h2>Full-Stack Developer<span id="type-it"></span></h2>
                        <p>Full-stack developer with a backend edge and a Data Science grad student at VIT, Vellore. I build scalable web apps and craft intelligent data-driven solutions, blending code and analytics to solve real-world problems.</p>
                        <div className="btn-bar">
                            <button className="px-btn px-btn-white" onClick={handleDownload}>Download CV</button>
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
