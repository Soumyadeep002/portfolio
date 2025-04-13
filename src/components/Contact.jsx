import React, { useState } from 'react'

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "efc3312f-54af-4264-9978-9df63bf41f36");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        setLoading(false);

        if (res.success) {
            console.log("Success", res);
            setShowDialog(true);
            event.target.reset();
        }
    };

    return (
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
                                <div className="sm-title"><h3>Email</h3></div>
                                <p>soumyadeep.ganguly2024@vitstudent.com<br/>soumyadeepganguly1922@gmail.com</p>
                            </div>
                            <div className="contact-name">
                                <div className="sm-title"><h3>My Location</h3></div>
                                <p>Kolkata, <br/>West Bengal, India</p>
                            </div>
                            <div className="contact-name">
                                <div className="sm-title"><h3>Phone</h3></div>
                                <p>+91 6290785895</p>
                            </div>
                            <div className="social-share nav">
                                <a target='_blank' href="https://www.facebook.com/soumyadeep.ganguly.758"><i className="bi bi-facebook"></i></a>
                                <a target='_blank' href="https://github.com/Soumyadeep002"><i className="bi bi-github"></i></a>
                                <a target='_blank' href="https://www.instagram.com/soumyadeep.002/"><i className="bi bi-instagram"></i></a>
                                <a target='_blank' href="https://www.linkedin.com/in/soumyadeep-ganguly-76652822a/"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 my-3">
                        <div className="contact-form">
                            <div className="sm-title"><h3>Get In Touch</h3></div>
                            <form id="contact-form" onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="Message" id="message" placeholder="Your message *" rows="3" className="form-control" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="px-btn px-btn-white" type="submit" disabled={loading}>
                                                <span>
                                                    {loading ? "Sending..." : "Contact Us"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {/* Dialog / Modal */}
                            {showDialog && (
                                <div className="modal-backdrop" style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1000
                                }}>
                                    <div style={{
                                        color: 'black',
                                        padding: '20px',
                                        backgroundColor: 'white',
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                        width: '400px'
                                    }}>
                                        <h4>✅ Message Sent!</h4>
                                        <p>Thank you for reaching out.</p>
                                        <button onClick={() => setShowDialog(false)} className="px-btn px-btn-theme">Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
