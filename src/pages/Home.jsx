import React from 'react';
import { ArrowRight, Globe, Layers, Smartphone, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const highlightServices = [
    { icon: <Globe size={28} />, title: "Web Development", desc: "Custom, scalable websites built with modern technologies and a focus on conversion." },
    { icon: <Layers size={28} />, title: "Full Stack Development", desc: "End-to-end solutions using MERN and MEAN stacks for enterprise-grade performance." },
    { icon: <Smartphone size={28} />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications that deliver seamless user experiences." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ── Hero Section ── */}
      <section className="home-hero">
        {/* Background blobs */}
        <motion.div
          className="home-hero__blob-1"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="home-hero__blob-2"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container home-hero__grid">
          {/* Left content */}
          <motion.div
            className="home-hero__content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="home-hero__badge">Premier IT Solutions & Consulting</span>
              <h1 className="home-hero__heading">
                Innovating <span className="grad-text">Digital Solutions</span> For The Future
              </h1>
              <p className="home-hero__subtext">
                We bridge the gap between technology and business goals with cutting-edge software engineering and user-first design.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="home-hero__cta-row">
              <Link to="/contact" className="home-hero__cta-primary">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="home-hero__cta-secondary">
                Our Services
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="home-hero__social-proof">
              <div className="home-hero__avatars">
                {[1, 2, 3].map(i => (
                  <div key={i} className="home-hero__avatar">
                    <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="client" />
                  </div>
                ))}
                <div className="home-hero__avatar">50+</div>
              </div>
              <p className="home-hero__trust-text">
                Trusted by <strong>500+</strong> global companies
              </p>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="home-hero__image-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="home-hero__image-card">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Innovation"
              />
              <div className="home-hero__image-overlay" />
            </div>

            {/* Floating card */}
            <motion.div
              className="home-hero__float-card"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="home-hero__float-inner">
                <div className="home-hero__float-icon">
                  <Code size={22} />
                </div>
                <div>
                  <p className="home-hero__float-label">Efficiency Boost</p>
                  <p className="home-hero__float-value">+45%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="home-intro">
        <div className="container">
          <div className="home-intro__inner">
            <span className="home-intro__label">About Uninova</span>
            <h2 className="home-intro__heading">Your Strategic Partner in Digital Excellence</h2>
            <p className="home-intro__body">
              We are a team of passionate developers, designers, and strategists dedicated to delivering exceptional software products. Our mission is to empower businesses with the technology they need to stay ahead of the competition.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/about" className="home-intro__link">
                Read Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="home-services">
        <div className="home-services__divider" />
        <div className="container">
          <div className="home-services__header">
            <div className="home-services__header-left">
              <h2 className="home-services__heading">Core Expertise</h2>
              <p className="home-services__subtext">Specialized solutions tailored to drive growth and operational excellence.</p>
            </div>
            <Link to="/services" className="home-services__explore-btn">
              Explore All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-services__grid">
            {highlightServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="home-service-card"
                whileHover={{ y: -10 }}
              >
                <div className="home-service-card__icon">{service.icon}</div>
                <h3 className="home-service-card__title">{service.title}</h3>
                <p className="home-service-card__desc">{service.desc}</p>
                <Link to="/services" className="home-service-card__link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="home-stats">
        <div className="container home-stats__grid">
          {[
            { n: "5+", l: "Years Experience" },
            { n: "25+", l: "Projects Completed" },
            { n: "15+", l: "Expert Engineers" },
            { n: "99%", l: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="home-stats__item">
              <p className="home-stats__number">{stat.n}</p>
              <p className="home-stats__label">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="home-cta">
        <div className="container">
          <motion.div
            className="home-cta__box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="home-cta__blob-1" />
            <div className="home-cta__blob-2" />
            <h2 className="home-cta__heading">Ready to transform your vision?</h2>
            <p className="home-cta__body">
              Let's build something exceptional together. Our team is ready to help you navigate the digital landscape with confidence.
            </p>
            <div className="home-cta__btn-row">
              <Link to="/contact" className="home-cta__btn">
                Contact Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;