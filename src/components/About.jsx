import React from 'react'
import AboutImg from '../assets/img/about-me.jpg'

export default function About() {
  return (
    <section id="about" data-scroll-index="1" className="section about-section dark-bg-1">
        <div className="placeholder">
            <h5>About</h5>
        </div>
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-7 ps-xl-5">
                    <div className="about-row about-text">
                        <div className="sm-title">
                            <h3>About Me</h3>
                        </div>
                        <h6>Hello, my name is <span>Zemo</span> and i am <span>UX/UI designer</span> and <span>front-end developer</span></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <div className="about-row tag-text">
                        <div className="sm-title">
                            <h3>Design Tools</h3>
                        </div>
                        <div className="nav">
                            <span>Adobe Xd</span>
                            <span> Illustrator</span>
                            <span>Photoshop </span>
                            <span>Figma </span>
                            <span>Sketch</span>
                        </div>
                    </div>
                    <div className="about-row tag-text">
                        <div className="sm-title">
                            <h3>Technologies and Skills</h3>
                        </div>
                        <div className="nav">
                            <span>Html</span>
                            <span>Css</span>
                            <span>Scss</span>
                            <span>Less</span>
                            <span>jQuery</span>
                            <span>php</span>
                            <span>React</span>
                            <span>Javascript</span>
                            <span>Graphic Design</span>
                            <span>Art Design</span>
                            <span>Ui/Ux Design</span>
                        </div>
                    </div>
                    <div className="about-row progress-text">
                        <div className="sm-title">
                            <h3>Work Process</h3>
                        </div>
                        <div className="row g-1">
                            <div className="col-6 col-sm-3">
                                <div className="d-flex align-items-center">
                                    <span>#01</span>
                                    <label className="col ps-2">Research</label>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div className="d-flex align-items-center">
                                    <span>#02</span>
                                    <label className="col ps-2">Design</label>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div className="d-flex align-items-center">
                                    <span>#03</span>
                                    <label className="col ps-2">Codeing</label>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div className="d-flex align-items-center">
                                    <span>#04</span>
                                    <label className="col ps-2">Launch</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-left">
                        <img src={AboutImg} title="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
