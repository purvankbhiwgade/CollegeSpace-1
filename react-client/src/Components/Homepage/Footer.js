import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription"></section>
      {/* <div className="footer-links">
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>
              <Link to="/aboutus">About Us</Link>
            </h2>
          </div>
          <div className="footer-link-items">
            <h2>
              <Link to="/support">Support</Link>
            </h2>
          </div>
        </div> 
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              VJTI | CollegeSpace
            </Link>
          </div>
          <h3 className="website-rights">CollegeSpace &copy; 2021</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/fb.vjti/" className="Facebook">
              <i className="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/vjtistudentactivities/?hl=en"
              className="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>

            <a href="https://youtube.com" className="Youtube">
              <i className="fab fa-youtube" />
            </a>

            <a href="https://twitter.com/vjti?lang=en" className="Twitter">
              <i className="fab fa-twitter" />
            </a>

            <a
              href="https://www.linkedin.com/in/tpo-vjti-30061971/"
              className="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
