import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Education from '../components/Education'
import Portfolio from '../components/Portfolio'

export default function HomePage() {
  return (
    <main>

        <Banner/>

    {/* <!-- About Us --> */} 
        <About/>
    {/* <!-- End About Us -->
    <!-- Services --> */}
        <Services/>
    {/* <!-- End Services -->
    <!-- Education --> */}
        <Education/>
    {/* <!-- End Education -->
    <!-- Portfolio --> */}
        <Portfolio/>
    {/* <!-- End Portfolio -->
    <!-- Testimonisla --> */}
    <section className="section testimonials-section dark-bg-1">
        <div className="placeholder">
            <h5>testimonials</h5>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>Testimonials</span></h2>
                    </div>
                </div>
            </div>
            <div className="owl-carousel pt-3" data-items="2" data-nav-dots="true" data-md-items="2" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="30">
                {/* <!-- testimonials --> */}
                <div className="testimonial-col">
                    <div className="d-flex">
                        <div className="img">
                            <img src="static/img/team-1.jpg" title="" alt=""/>
                        </div>
                        <div className="col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <div className="tc-info">
                                <h6>Nancy Bayers</h6>
                                <span>Founder & CEO at Pxdraft</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- / -->
                <!-- testimonials --> */}
                <div className="testimonial-col">
                    <div className="d-flex">
                        <div className="img">
                            <img src="static/img/team-1.jpg" title="" alt=""/>
                        </div>
                        <div className="col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <div className="tc-info">
                                <h6>Nancy Bayers</h6>
                                <span>Founder & CEO at Pxdraft</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- / -->
                <!-- testimonials --> */}
                <div className="testimonial-col">
                    <div className="d-flex">
                        <div className="img">
                            <img src="static/img/team-1.jpg" title="" alt=""/>
                        </div>
                        <div className="col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <div className="tc-info">
                                <h6>Nancy Bayers</h6>
                                <span>Founder & CEO at Pxdraft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Testimonisla -->
    <!-- Blog --> */}
    <section id="blog" data-scroll-index="4" className="section">
        <div className="placeholder">
            <h5>Blog</h5>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>Latest Blog</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <div className="blog-post">
                        <div className="blog-img">
                            <div className="data">
                                <span>14</span>
                                <small>JAN</small>
                            </div>
                            <a href="blog.html">
                                <img src="static/img/blog-1.jpg" title="" alt=""/>
                            </a>
                        </div>
                        <div className="blog-info">
                            <h6><a href="blog.html">Prevent 75% of visitors from google analytics</a></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn-bar">
                                <a href="blog.html" className="px-btn-arrow">
                                    <span>Read More</span>
                                    <i className="arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="blog-post">
                        <div className="blog-img">
                            <div className="data">
                                <span>14</span>
                                <small>JAN</small>
                            </div>
                            <a href="blog.html">
                                <img src="static/img/blog-2.jpg" title="" alt=""/>
                            </a>
                        </div>
                        <div className="blog-info">
                            <h6><a href="blog.html">Prevent 75% of visitors from google analytics</a></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn-bar">
                                <a href="blog.html" className="px-btn-arrow">
                                    <span>Read More</span>
                                    <i className="arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="blog-post">
                        <div className="blog-img">
                            <div className="data">
                                <span>14</span>
                                <small>JAN</small>
                            </div>
                            <a href="blog.html">
                                <img src="static/img/blog-3.jpg" title="" alt=""/>
                            </a>
                        </div>
                        <div className="blog-info">
                            <h6><a href="blog.html">Prevent 75% of visitors from google analytics</a></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn-bar">
                                <a href="blog.html" className="px-btn-arrow">
                                    <span>Read More</span>
                                    <i className="arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Blog -->
    <!-- Contact --> */}
    <section id="contactus" data-scroll-index="5" className="section dark-bg-1 contactus-section">
        <div className="placeholder">
            <h5>Contact</h5>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>Contact Me</span></h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 my-3">
                    <div className="contact-info">
                        <div className="contact-name">
                            <div className="sm-title">
                                <h3>Email</h3>
                            </div>
                            <p>info@domainname.com<br />support@domain.com</p>
                        </div>
                        <div className="contact-name">
                            <div className="sm-title">
                                <h3>Visit My Studio</h3>
                            </div>
                            <p>Warnwe Park Streetperrine, <br/>FL 33157 New York City</p>
                        </div>
                        <div className="contact-name">
                            <div className="sm-title">
                                <h3>Phone</h3>
                            </div>
                            <p>+01 123 654 8096</p>
                        </div>
                        <div className="social-share nav">
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
                    </div>
                </div>
                <div className="col-lg-8 my-3">
                    <div className="contact-form">
                        <div className="sm-title">
                            <h3>Get In Touch</h3>
                        </div>
                        <form id="contact-form" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="Name" id="name" placeholder="Name *" className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="Email" id="email" placeholder="Email *" className="form-control" type="email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" placeholder="Your message *" rows="3" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="send">
                                        <button className="px-btn px-btn-white" onclick="send_mail()" type="button" value="Send"><span>Contact Us</span></button>
                                    </div>
                                    {/* <span id="suce_message" className="text-success" style={{display: none}}>Message Sent Successfully</span>
                                    <span id="err_message" className="text-danger" style={{display}}">Message Sending Failed</span> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}
