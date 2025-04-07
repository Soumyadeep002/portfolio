import React, {useState} from 'react'

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => {
        setShowNavbar(prev => !prev);
      };
  return (
   
    <header className="main-header navbar-blur">
        <nav className="navbar header-nav header-white header-transparent navbar-expand-lg one-page-nav ">
            <div className="container">
                <a className="navbar-brand header-font" href="#">Soumya<span></span></a>
                <button className={`navbar-toggler ${showNavbar ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle" onClick={toggleNavbar} aria-controls="navbar-collapse-toggle" aria-expanded={`${showNavbar ? 'true' : 'false'}`} aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${showNavbar ? 'show' : ''}`} id="navbar-collapse-toggle">
                    <ul className="navbar-nav ml-auto">
                        <li><a className="nav-link" onClick={toggleNavbar} data-scroll-nav="0" href="#home"><span>Home</span></a></li>
                        <li><a className="nav-link" onClick={toggleNavbar} data-scroll-nav="1" href="#about"><span>About Us</span></a></li>
                        <li><a className="nav-link" onClick={toggleNavbar} data-scroll-nav="2" href="#services"><span>Services</span></a></li>
                        <li><a className="nav-link" onClick={toggleNavbar} data-scroll-nav="3" href="#work"><span>Projects</span></a></li>
                        <li><a className="nav-link" onClick={toggleNavbar} data-scroll-nav="5" href="#contactus"><span>Contact</span></a></li>
                    </ul>
                </div>
            </div>
        </nav> 
    </header>
   
  )
}
