import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 my-2">
                    <div className="nav justify-content-center justify-content-md-start">
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
                <div className="col-md-6 my-2 text-center text-md-end">
                    <p>&copy; 2022-{year} copyright <a target='_blank' href="https://github.com/Soumyadeep002">Soumyadeep002</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}
