import React from 'react';
import { Mail, MapPin, Send, MessageSquare, Share2, Camera, ArrowRight, Code, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: <Mail size={22} />, title: "Email Us", detail: "uninovatech.admin@gmail.com", sub: "Response within 24 hours" },
    { icon: <MapPin size={22} />, title: "Visit Us", detail: "Block A, 472/3, Maheswari Nagar, B Narayanapura", sub: "Mahadevapura, Bengaluru 560048" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ── Hero Header ── */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container contact-hero__inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="contact-hero__heading">
              Let's <span className="grad-text">Connect</span>
            </h1>
            <p className="contact-hero__subtext">
              Have a project in mind or just want to say hello? Our team is ready to listen and help you navigate your next digital leap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Contact Section ── */}
      <section className="contact-main">
        <div className="container contact-main__grid">

          {/* Left — Contact Info */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="contact-info__header">
              <h2 className="contact-info__heading">Contact Information</h2>
              <p className="contact-info__subtext">Reach out via any of these channels. We're excited to hear from you.</p>
            </div>

            <div className="contact-info__items">
              {contactInfo.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="contact-info__item">
                  <div className="contact-info__item-icon">{item.icon}</div>
                  <div>
                    <h4 className="contact-info__item-title">{item.title}</h4>
                    <p className="contact-info__item-detail">{item.detail}</p>
                    <p className="contact-info__item-sub">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="contact-info__social-heading">Follow Our Journey</h4>
              <div className="contact-info__social-links">
                {[
                  { Icon: Link2, url: "https://www.linkedin.com/in/uninova-tech" },
                  { Icon: Code, url: "https://github.com/uninova-tech-solutions" }
                ].map(({ Icon, url }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-btn"
                    whileHover={{ scale: 1.1, y: -4 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-form-card__blob" />

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label className="contact-form__label">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="contact-form__input"
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="contact-form__input"
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="contact-form__input"
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="contact-form__textarea"
                />
              </div>

              <motion.button
                type="submit"
                className="contact-form__submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Office Visual ── */}
      <section className="contact-office">
        <div className="container">
          <div className="contact-office__card">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Office Location"
              className="contact-office__img"
            />
            <div className="contact-office__overlay">
              <div className="contact-office__box">
                <h3 className="contact-office__box-heading">Bangalore HQ</h3>
                <p className="contact-office__box-text">
                  Block A, 472/3, Maheswari Nagar, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048, India
                </p>
                <button 
                  className="contact-office__directions-btn"
                  onClick={() => window.open('https://maps.google.com/?q=Block+A,+472/3,+Maheswari+Nagar,+B+Narayanapura,+Mahadevapura,+Bengaluru,+Karnataka+560048,+India', '_blank')}
                >
                  Get Directions <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;