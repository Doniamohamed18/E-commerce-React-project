import React from 'react'
import './Footer.css'  // Import external styles

const Footer = () => {
  return (
    <>
    <div className="footer-section p-0 mt-5">
      <footer className="text-center text-lg-start custom-footer text-light">
        
        {/* Social Media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom social-section">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#!" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></a>
            <a href="#!" className="me-4 text-reset"><i className="fab fa-twitter"></i></a>
            <a href="#!" className="me-4 text-reset"><i className="fab fa-google"></i></a>
            <a href="#!" className="me-4 text-reset"><i className="fab fa-instagram"></i></a>
            <a href="#!" className="me-4 text-reset"><i className="fab fa-linkedin"></i></a>
            <a href="#!" className="me-4 text-reset"><i className="fab fa-github"></i></a>
          </div>
        </section>

        {/* Footer Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-title">
                  <i className="fas fa-gem me-3"></i>Donia's Shop
                </h6>
                <p>
                  It’s about creating a home you love. Visit us today and let us help you bring your vision to life with pieces that combine durability, beauty, and affordability.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-title">Products</h6>
                <p><span className="footer-link">TV Stand</span></p>
                <p><span className="footer-link">Shoe Rack</span></p>
                <p><span className="footer-link">Dresser</span></p>
                <p><span className="footer-link">More</span></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-title">Useful links</h6>
                <p><a href="#!" className="footer-link">Pricing</a></p>
                <p><a href="#!" className="footer-link">Settings</a></p>
                <p><a href="#!" className="footer-link">Orders</a></p>
                <p><a href="#!" className="footer-link">Help</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footer-title">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Cairo, Maadi, EG</p>
                <p><i className="fas fa-envelope me-3"></i> doniamohamed1103@gmail.com</p>
                <p><i className="fas fa-phone me-3"></i> +20 114 082 ####</p>
                <p><i className="fas fa-print me-3"></i> +055 234 ####</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Copyright */}
        <div className="text-center p-3 copyright">
          Donia © 2025 Copyright
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
