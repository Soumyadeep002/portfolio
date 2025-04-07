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

    <!-- Contact --> */}
    <section id="contactus" data-scroll-index="4" className="section dark-bg-1 contactus-section">
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
                            <p>soumyadeep,ganguly2024@vitstudent.com<br/>
                            soumyadeepganguly1922@gmail.com</p>
                        </div>
                        <div className="contact-name">
                            <div className="sm-title">
                                <h3>My Location</h3>
                            </div>
                            <p>Kolkata, <br/>West Bengal, India</p>
                        </div>
                        <div className="contact-name">
                            <div className="sm-title">
                                <h3>Phone</h3>
                            </div>
                            <p>+91 6290785895</p>
                        </div>
                        <div className="social-share nav">
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
