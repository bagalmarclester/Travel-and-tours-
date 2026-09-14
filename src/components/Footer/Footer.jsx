import { MapPin, Phone, Mail, Clock, ArrowUpRight, Globe } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Mission */}
          <div className="footer-column footer-brand-col">
            <div className="footer-brand">
              <img src={logoImg} alt="THEZMARC Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-brand-title">THEZMARC</span>
                <span className="footer-brand-subtitle">Travel and Tours</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Your trusted partner for memorable travel adventures. We curate extraordinary, safe, and affordable tour packages across the Philippine islands and worldwide destinations.
            </p>
            <div className="footer-social-links" aria-label="Social Media Links">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="mailto:info@thezmarctravel.com" className="social-link" aria-label="Email Us">
                <Mail size={18} aria-hidden="true" />
              </a>
              <a href="#home" className="social-link" aria-label="Website Home">
                <Globe size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Navigation */}
          <div className="footer-column footer-links-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#home" className="footer-link">
                  <span>Home</span>
                  <ArrowUpRight size={14} className="footer-link-icon" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#destination" className="footer-link">
                  <span>Featured Destinations</span>
                  <ArrowUpRight size={14} className="footer-link-icon" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#why-us" className="footer-link">
                  <span>Why Travel With Us</span>
                  <ArrowUpRight size={14} className="footer-link-icon" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#about-us" className="footer-link">
                  <span>About Us</span>
                  <ArrowUpRight size={14} className="footer-link-icon" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  <span>Contact & Support</span>
                  <ArrowUpRight size={14} className="footer-link-icon" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Working Hours */}
          <div className="footer-column footer-contact-col">
            <h3 className="footer-col-title">Get In Touch</h3>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Office Location</span>
                  <span className="contact-val">Metro Manila & Key Tour Hubs, Philippines</span>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Hotline & Bookings</span>
                  <a href="tel:+639123456789" className="contact-val contact-link">+63 912 345 6789</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email Support</span>
                  <a href="mailto:info@thezmarctravel.com" className="contact-val contact-link">info@thezmarctravel.com</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <Clock size={18} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Working Hours</span>
                  <span className="contact-val">Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Baseline */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} THEZMARC Travel and Tours. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="legal-sep" aria-hidden="true">•</span>
            <a href="#terms" className="legal-link">Terms of Service</a>
            <span className="legal-sep" aria-hidden="true">•</span>
            <a href="#faq" className="legal-link">Travel FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
