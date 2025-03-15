import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/think">Think</a></li>
              <li><a href="/clients">Clients</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul>
              <li><a href="/logo-design">Logo Design Dubai</a></li>
              <li><a href="/packaging">Packaging Design</a></li>
              <li><a href="/brochure">Brochure Design</a></li>
              <li><a href="/video">Video Production</a></li>
              <li><a href="/marketing">PR & Marketing</a></li>
              <li><a href="/brand-launch">Brand Launch</a></li>
              <li><a href="/web3">Web 3.0</a></li>
            </ul>
            <ul>
              <li><a href="/real-estate">Real Estate</a></li>
              <li><a href="/social-media">Social Media</a></li>
              <li><a href="/brand-naming">Brand Naming</a></li>
              <li><a href="/trademark">Trademark</a></li>
              <li><a href="/web-design">Web Design</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Latifa Towers</p>
          <p>34th Floor, Office 3401</p>
          <p>Sheikh Zayed Road, Dubai</p>
          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:hello@moonbox.ae">hello@moonbox.ae</a>
          </p>
          <p>
            <FaPhone className="icon" />
            <a href="tel:+97142696733">04 2696733</a>
          </p>
          <p>
            <FaWhatsapp className="icon" />
            <a href="https://wa.me/971524219856">052 421 9856</a>
          </p>
        </div>

        {/* Reach Us */}
        <div className="footer-section">
          <h3>Reach Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">© 2024 Moonbox - Branding Agency Dubai. All Rights Reserved.</p>
        <p className="copyright">Moonbox is a part of Element 8 Group</p>
      </div>
    </footer>
  );
};

export default Footer;




