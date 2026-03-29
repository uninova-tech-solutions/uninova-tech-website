import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
      <div className="container navbar__inner">

        {/* ── Brand ── */}
        <Link to="/" className="navbar__brand">
          <motion.img
            src={logo}
            alt="Uninova Logo"
            className="navbar__logo"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">UNINOVA</span>
            <span className="navbar__brand-sub">Tech Solutions</span>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="navbar__desktop">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar__link-item">
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="navbar__link-indicator"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="navbar__mobile-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar__mobile-link ${isActive(link.path) ? 'navbar__mobile-link--active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className="navbar__mobile-icon" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="navbar__mobile-login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;