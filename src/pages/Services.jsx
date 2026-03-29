import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Smartphone, Palette, Cpu, BarChart, Megaphone, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

const Services = () => {
  const services = [
    { icon: <Globe size={30} />, title: "Web Development", desc: "Creating responsive, fast-loading, and SEO-friendly websites using the latest web standards and frameworks for maximum conversion." },
    { icon: <Layers size={30} />, title: "Full Stack Development", desc: "Comprehensive development using MERN and MEAN stacks, providing scalable and secure backends with intuitive frontends." },
    { icon: <Smartphone size={30} />, title: "Mobile App Development", desc: "Building high-performance native and cross-platform (React Native, Flutter) mobile apps that users love to interact with." },
    { icon: <Palette size={30} />, title: "UI/UX Design", desc: "User-centric design that focuses on usability, accessibility, and delivering a seamless digital experience that delights." },
    { icon: <Cpu size={30} />, title: "AI & Machine Learning", desc: "Integrating intelligent algorithms and predictive models to automate complex processes and gain valuable business insights." },
    { icon: <BarChart size={30} />, title: "Data Science & Analytics", desc: "Turning raw data into actionable business intelligence through advanced statistical modeling and dynamic visualizations." },
    { icon: <Megaphone size={30} />, title: "Digital Marketing", desc: "Strategic online marketing, SEO, and social media management to grow your brand's digital footprint and reach new audiences." },
    { icon: <Cloud size={30} />, title: "Cloud & DevOps", desc: "Streamlining development lifecycles and managing cloud infrastructure (AWS, Azure, GCP) for 99.9% uptime and scalability." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const steps = [
    { step: "01", title: "Strategy", desc: "We deep-dive into your business goals to build a scalable roadmap." },
    { step: "02", title: "Design", desc: "Creating intuitive and beautiful interfaces that people love." },
    { step: "03", title: "Develop", desc: "Engineering robust, clean, and future-proof codebases." },
    { step: "04", title: "Success", desc: "Continuous monitoring, updates, and strategic scaling." },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ── Hero Header ── */}
      <section className="services-hero">
        <div className="services-hero__bg" />
        <div className="container services-hero__inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="services-hero__heading">
              Our <span className="grad-text">Expertise</span>
            </h1>
            <p className="services-hero__subtext">
              Comprehensive IT solutions tailored to your unique business needs. We deliver technical excellence across every digital domain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="services-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="services-card__icon">{service.icon}</div>
                <h3 className="services-card__title">{service.title}</h3>
                <p className="services-card__desc">{service.desc}</p>
                <div className="services-card__cta">
                  Learn Details <CheckCircle2 size={15} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Methodology Section ── */}
      <section className="services-method">
        <div className="container">
          <div className="services-method__header">
            <h2 className="services-method__heading">Our Innovation Process</h2>
            <p className="services-method__subtext">
              A streamlined, result-oriented approach from initial concept to final deployment.
            </p>
          </div>

          <div className="services-method__grid">
            <div className="services-method__line" />
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                className="services-method__step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="services-method__step-circle">
                  <span className="services-method__step-num">{item.step}</span>
                </div>
                <h4 className="services-method__step-title">{item.title}</h4>
                <p className="services-method__step-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__box">
            <div className="services-cta__blob" />
            <div className="services-cta__inner">
              <div className="services-cta__text">
                <h2 className="services-cta__heading">Need a custom solution?</h2>
                <p className="services-cta__subtext">
                  Our engineers are ready to build specifically for your needs. Let's discuss your project today.
                </p>
              </div>
              <Link to="/contact" className="services-cta__btn">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;