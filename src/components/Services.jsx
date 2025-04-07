import React from 'react'

export default function Services() {
  return (
    <section id="services" data-scroll-index="2" className="section services-section">
        <div className="placeholder">
            <h5>Services</h5>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2><span>My Services</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <!-- feaure box --> */}
                <div className="col-sm-6 col-lg-4 my-3">
                    <div className="feature-box-1">
                        <div className="icon hexagon">
                            <i className="bi bi-laptop"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Build Website</h5>
                            <p>Building fast, responsive, and scalable websites using modern full-stack technologies to deliver seamless user experiences across all devices.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- / -->
                <!-- feaure box --> */}
                <div className="col-sm-6 col-lg-4 my-3">
                    <div className="feature-box-1">
                        <div className="icon hexagon">
                            <i className="bi bi-layout-text-window"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Manage Database</h5>
                            <p>Designing, managing, and optimizing relational and non-relational databases to ensure secure, efficient, and high-performance data storage and retrieval.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- / -->
                <!-- feaure box --> */}
                <div className="col-sm-6 col-lg-4 my-3">
                    <div className="feature-box-1">
                        <div className="icon hexagon">
                            <i className="bi bi-layers"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Manage Production</h5>
                            <p>Coordinating development pipelines, automating deployments, and managing resources to ensure smooth, timely, and efficient product delivery from start to finish.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
