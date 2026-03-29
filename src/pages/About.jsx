import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Zap, LifeBuoy, ArrowRight, Users, Globe, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import teamImg from '../assets/tech-team.png';

const About = () => {
  const whyChooseUs = [
    {
      icon: <Award size={32} />,
      title: "ISO-Certified Quality",
      desc: "Every deliverable is built to international quality benchmarks. Our rigorous QA processes ensure zero-defect deployments and long-term system reliability."
    },
    {
      icon: <Zap size={32} />,
      title: "Agile & Scalable",
      desc: "We follow agile methodologies to deliver faster, iterate smarter, and scale effortlessly — adapting to your business needs at every stage of growth."
    },
    {
      icon: <LifeBuoy size={32} />,
      title: "24/7 Dedicated Support",
      desc: "Our round-the-clock support team ensures your systems stay operational. From incident response to ongoing maintenance, we've got you covered."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Delivery Model",
      desc: "With a presence across multiple time zones, we offer seamless offshore and onshore delivery models tailored to your business operations."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Talent Pool",
      desc: "Our team of 50+ certified engineers, architects, and strategists brings deep domain expertise across industries including BFSI, healthcare, and e-commerce."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "ROI-Driven Approach",
      desc: "We don't just build software — we build business value. Every solution is designed with measurable outcomes and long-term return on investment in mind."
    },
  ];

  const milestones = [
    { year: "2015", event: "Founded in Bangalore with a core team of 5 engineers" },
    { year: "2017", event: "Expanded to 30+ clients across India and Southeast Asia" },
    { year: "2019", event: "Launched Cloud & DevOps practice; crossed 100 projects" },
    { year: "2021", event: "Opened delivery centre; onboarded first Fortune 500 client" },
    { year: "2023", event: "AI & ML division established; team grew to 50+ engineers" },
    { year: "2025", event: "Serving 200+ clients across 12 countries worldwide" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>
        <motion.div
          className="about-hero-inner"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-hero-tag">About Uninova Tech</div>
          <h1>Engineering the <span>Future</span> of Business</h1>
          <p>
            For over a decade, we have partnered with startups, enterprises, and
            government bodies to design, build, and scale technology that drives
            real business outcomes.
          </p>
          <div className="about-hero-stats">
            <div className="about-hero-stat">
              <strong>10+</strong>
              <span>Years of Excellence</span>
            </div>
            <div className="about-hero-stat-divider"></div>
            <div className="about-hero-stat">
              <strong>250+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="about-hero-stat-divider"></div>
            <div className="about-hero-stat">
              <strong>12</strong>
              <span>Countries Served</span>
            </div>
            <div className="about-hero-stat-divider"></div>
            <div className="about-hero-stat">
              <strong>50+</strong>
              <span>Certified Engineers</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="about-intro">
        <div className="about-intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-intro-text"
          >
            <div className="about-intro-badge">Who We Are</div>
            <h2>A Technology Partner You Can Build Your Business On</h2>
            <p>
              Uninova Tech Solutions is a full-spectrum IT services and consulting firm
              headquartered in Bangalore, India. Since 2015, we have helped businesses
              across industries modernize their operations, accelerate digital transformation,
              and unlock new revenue streams through technology.
            </p>
            <p>
              We are not just a vendor — we are a long-term technology partner. Our
              engagement model is built on transparency, accountability, and a deep
              understanding of your industry. From strategy to deployment and beyond,
              we walk every step of the journey with you.
            </p>
            <ul className="about-intro-checklist">
              <li><CheckCircle size={16} /> End-to-end software product development</li>
              <li><CheckCircle size={16} /> Cloud infrastructure and DevOps automation</li>
              <li><CheckCircle size={16} /> AI, ML and data analytics solutions</li>
              <li><CheckCircle size={16} /> Enterprise system integration and modernization</li>
              <li><CheckCircle size={16} /> Dedicated team augmentation models</li>
            </ul>
          </motion.div>

          <motion.div
            className="about-intro-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={teamImg}
              alt="Uninova Tech Team"
            />
            <div className="about-image-blob"></div>
            <div className="about-image-badge">
              <strong>98%</strong>
              <span>Client Retention Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="about-mv-header">
          <span>Our Purpose</span>
          <h2>What Drives Us Every Day</h2>
        </div>
        <div className="about-mv-grid">
          <motion.div whileHover={{ y: -10 }} className="about-mv-card mission">
            <div className="about-mv-icon"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>
              To deliver world-class technology solutions that empower organizations to
              operate more efficiently, compete more effectively, and grow more sustainably.
              We are committed to building software that creates lasting impact — not just
              functional deliverables, but strategic assets that fuel business growth.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="about-mv-card vision">
            <div className="about-mv-icon"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted technology partner for businesses worldwide — known
              for engineering excellence, ethical practices, and the ability to turn complex
              challenges into elegant, scalable solutions. We envision a world where every
              business, regardless of size, has access to enterprise-grade technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="about-timeline-inner">
          <div className="about-why-header">
            <span>Our Journey</span>
            <h2>A Decade of Growth and Innovation</h2>
          </div>
          <div className="about-timeline-list">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                className="about-timeline-item"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="about-timeline-year">{m.year}</div>
                <div className="about-timeline-dot"></div>
                <div className="about-timeline-event">{m.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="about-why-header">
          <span>The Uninova Advantage</span>
          <h2>Why 200+ Businesses Choose Us</h2>
        </div>
        <motion.div
          className="about-why-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {whyChooseUs.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="about-why-card">
              <div className="about-why-card-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Strip */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div className="about-cta-text">
            <h2>Ready to build something extraordinary?</h2>
            <p>
              Let's discuss how Uninova Tech can accelerate your digital transformation.
              Our consultants are available for a free 30-minute strategy call.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link to="/contact" className="about-cta-btn">
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="about-cta-btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;