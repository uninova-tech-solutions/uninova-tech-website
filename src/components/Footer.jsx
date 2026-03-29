import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Share2,
  Camera,
  Link2,
  MessageCircle,
  Code
} from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <Link2 size={16} />, url: 'https://www.linkedin.com/in/uninova-tech' },
    { name: 'GitHub', icon: <Code size={16} />, url: 'https://github.com/uninova-tech-solutions' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'Web Development', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
    { name: 'AI & ML', path: '/services' },
    { name: 'Digital Marketing', path: '/services' }
  ];

  return (
    <footer className="footer-section">

      <div className="container mx-auto px-6">
        <div className="footer-grid">

          {/* Company Info */}
          <div>
            <Link to="/" className="footer-brand-link">
              <img src={logo} alt="Uninova Tech" />
            </Link>
            <p className="footer-brand-desc">
              Innovating digital solutions that empower businesses to thrive in the
              modern technological landscape. We turn your vision into reality.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-link-list">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <MapPin size={14} />
              </div>
              <span className="footer-contact-text">Block A, 472/3, Maheswari Nagar, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048</span>
            </div>


            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <Mail size={14} />
              </div>
              <span className="footer-contact-text">uninovatech.admin@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Uninova Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;