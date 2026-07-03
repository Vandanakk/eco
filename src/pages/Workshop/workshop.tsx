import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, faLeaf, faCheckCircle, 
  faChevronRight, faBoxes, faTools,
  faRecycle, faBriefcase, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../component/Footer/footer";
import "./workshop.css";

// Redesigned Image Assets
import workshop1 from "../../images/workshop-1.jpeg";
import workshop2 from "../../images/workshop-2.png";
import workshop3 from "../../images/workshop-3.png";
import workshop4 from "../../images/workshop-4.png";
import workshop5 from "../../images/workshop-5.png";
import workshop6 from "../../images/workshop-6.png";
import workshop7 from "../../images/workshop-7.png";
import workshop8 from "../../images/workshop-8.png";
import workshop9 from "../../images/workshop-9.png";
import workshop10 from "../../images/workshop-10.png";
import workshop11 from "../../images/workshop-11.png";
import workshop12 from "../../images/workshop-12.png";
import workshop13 from "../../images/workshop-13.png";
import workshop14 from "../../images/workshop-14.png";
import workshop15 from "../../images/workshop-15.png";
import workshop16 from "../../images/workshop-16.png";
import workshop17 from "../../images/workshop-17.png";
import workshop18 from "../../images/workshop-18.png";
import workshop19 from "../../images/workshop-19.png";
import workshop20 from "../../images/workshop-20.png";
import workshop21 from "../../images/workshop-21.png";
import workshopMainFull from "../../images/workshop_main.png";

export default function Workshop() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Our Workshop & Crafting Process - Ecowoodies</title>
        <meta name="description" content="Discover our upcycling workshop, from selecting raw fire hoses to careful packaging and shipping sustainable creations globally." />
      </Helmet>

      <div className="workshop-page-redesign">
        {/* HERO BANNER SECTION */}
        <section className="workshop-hero-banner">
          <div className="hero-banner-image-wrapper">
            <img src={workshopMainFull} alt="Our Workshop Banner" className="hero-banner-bg" />
          </div>
          <div className="hero-banner-content">
            <span className="hero-banner-badge">OUR WORKSHOP</span>
            <h1 className="hero-banner-title">Crafted with Skill.<br/>Built on Sustainability.</h1>
            <p className="hero-banner-desc">
              At Ecowoodies, our workshop is where tradition meets innovation. From initial designs to responsible processes, every piece we create reflects our commitment to quality, people, and the planet.
            </p>
            <div className="hero-banner-bullets">
              <div className="bullet-item">
                <span className="bullet-icon-wrapper">
                  <FontAwesomeIcon icon={faUsers} className="bullet-icon" />
                </span>
                <span className="bullet-label">Skilled Artisans</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon-wrapper">
                  <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                </span>
                <span className="bullet-label">Sustainable Materials</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon-wrapper">
                  <FontAwesomeIcon icon={faRecycle} className="bullet-icon" />
                </span>
                <span className="bullet-label">Ethical Production</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-icon-wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} className="bullet-icon" />
                </span>
                <span className="bullet-label">Quality Assured</span>
              </div>
            </div>
          </div>
          <div className="hero-banner-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#1b3a1e" />
            </svg>
          </div>
        </section>

        {/* HERO FULL IMAGE SECTION */}
        <section className="workshop-hero-full-image-section">
          <div className="full-image-container">
            <img src={workshopMainFull} alt="Our Workshop Full View" className="workshop-full-view-img" />
          </div>
        </section>

        {/* 1. IMPACT STATS SECTION */}
        <section className="impact-section">
          <div className="impact-container">
            <div className="impact-left">
              <div className="impact-title-group">
                <svg className="leaf-outline-svg" viewBox="0 0 100 100">
                  <path d="M10,90 Q40,40 85,15" stroke="#dfc08a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M85,15 Q75,35 60,35 Q40,30 50,15 Z" fill="#dfc08a" opacity="0.8" />
                  <path d="M50,15 Q35,40 25,40 Q15,35 25,15 Z" fill="#dfc08a" opacity="0.6" />
                  <path d="M65,40 Q55,60 45,60 Q35,50 45,30 Z" fill="#dfc08a" opacity="0.7" />
                </svg>
                <h2 className="impact-heading">OUR IMPACT<br/><span>IN NUMBERS</span></h2>
              </div>
            </div>
            <div className="impact-right">
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={faRecycle} className="stat-icon" />
                </div>
                <h3 className="stat-number">5,200+</h3>
                <p className="stat-label">KG OF FIRE HOSES<br/>UPCYCLED</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={faUsers} className="stat-icon" />
                </div>
                <h3 className="stat-number">120+</h3>
                <p className="stat-label">ARTISANS & WORKERS<br/>EMPOWERED</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={faLeaf} className="stat-icon" />
                </div>
                <h3 className="stat-number">30+</h3>
                <p className="stat-label">RURAL COMMUNITIES<br/>SUPPORTED</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={faBriefcase} className="stat-icon" />
                </div>
                <h3 className="stat-number">10,000+</h3>
                <p className="stat-label">PRODUCTS<br/>CREATED</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROCESS GRID (4 COLUMNS) */}
        <section className="features-grid-section">
          <div className="features-grid-container">
            <div className="feature-grid-card">
              <div className="feature-card-img-wrapper">
                <img src={workshop1} alt="Raw Material Selection" />
              </div>
              <div className="feature-card-content">
                <div className="feature-card-title-group">
                  <span className="feature-title-icon-wrapper">
                    <FontAwesomeIcon icon={faRecycle} className="feature-title-icon" />
                  </span>
                  <h4>Raw Material Selection</h4>
                </div>
                <p>We source discarded fire-hoses that have completed their service life.</p>
              </div>
            </div>
            <div className="feature-grid-card">
              <div className="feature-card-img-wrapper">
                <img src={workshop2} alt="Hand-Weaving" />
              </div>
              <div className="feature-card-content">
                <div className="feature-card-title-group">
                  <span className="feature-title-icon-wrapper">
                    <FontAwesomeIcon icon={faTools} className="feature-title-icon" />
                  </span>
                  <h4>Hand-Weaving</h4>
                </div>
                <p>Our artisans hand-weave every piece using traditional techniques.</p>
              </div>
            </div>
            <div className="feature-grid-card">
              <div className="feature-card-img-wrapper">
                <img src={workshop3} alt="Quality Inspection" />
              </div>
              <div className="feature-card-content">
                <div className="feature-card-title-group">
                  <span className="feature-title-icon-wrapper">
                    <FontAwesomeIcon icon={faCheckCircle} className="feature-title-icon" />
                  </span>
                  <h4>Quality Inspection</h4>
                </div>
                <p>Each product is carefully inspected to ensure durability and flawless finishing.</p>
              </div>
            </div>
            <div className="feature-grid-card">
              <div className="feature-card-img-wrapper">
                <img src={workshop4} alt="Expert Packing" />
              </div>
              <div className="feature-card-content">
                <div className="feature-card-title-group">
                  <span className="feature-title-icon-wrapper">
                    <FontAwesomeIcon icon={faBoxes} className="feature-title-icon" />
                  </span>
                  <h4>Expert Packing</h4>
                </div>
                <p>Products are packed with care for safe delivery around the world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SPLIT WORKSHOP SECTION */}
        <section className="workshop-details-section">
          <div className="workshop-details-container">
            <div className="workshop-details-left">
              <div className="details-image-card">
                <img src={workshop5} alt="Our Workshop" className="workshop-main-img" />
              </div>
            </div>
            <div className="workshop-details-right">
              <span className="details-badge">OUR WORKSHOP?</span>
              <h2 className="details-title">Crafted with care,<br/>made to last.</h2>
              <p className="details-desc">
                From skilled hands to sustainable practices, every step in our workshop reflects our commitment to people and the planet.
              </p>
              <ul className="details-checklist">
                <li>
                  <span className="checklist-circle-icon">✓</span>
                  <span>Ethical & fair working environment</span>
                </li>
                <li>
                  <span className="checklist-circle-icon">✓</span>
                  <span>Traditional craftsmanship</span>
                </li>
                <li>
                  <span className="checklist-circle-icon">✓</span>
                  <span>Sustainable & eco-friendly production</span>
                </li>
              </ul>
              <div className="details-leaf-decoration">
                <svg className="decorative-leaf-svg" viewBox="0 0 100 100">
                  <path d="M10,90 Q40,40 85,15" stroke="#688b58" strokeWidth="1" fill="none" opacity="0.2" />
                  <path d="M85,15 Q75,35 60,35 Q40,30 50,15 Z" fill="#688b58" opacity="0.15" />
                  <path d="M50,15 Q35,40 25,40 Q15,35 25,15 Z" fill="#688b58" opacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 4. LOGISTICS & WAREHOUSING ROW */}
        <section className="logistics-section">
          <div className="logistics-container">
            <div className="logistics-card">
              <div className="logistics-img-wrapper">
                <img src={workshop6} alt="Ready for Shipment" />
              </div>
              <div className="logistics-label">Ready for Shipment</div>
            </div>
            <div className="logistics-card">
              <div className="logistics-img-wrapper">
                <img src={workshop7} alt="Warehousing" />
              </div>
              <div className="logistics-label">Warehousing</div>
            </div>
            <div className="logistics-card">
              <div className="logistics-img-wrapper">
                <img src={workshop8} alt="Loading Container" />
              </div>
              <div className="logistics-label">Loading Container</div>
            </div>
            <div className="logistics-card">
              <div className="logistics-img-wrapper">
                <img src={workshop9} alt="Grid Packaging" />
              </div>
              <div className="logistics-label">Each product pack in poly bags & card box</div>
            </div>
          </div>
        </section>

        {/* 5. ENVIRONMENTAL IMPACT DETAILS BANNER */}
        <section className="environmental-pack-section">
          <div className="environmental-container">
            <div className="env-info-card">
              <div className="env-recycle-icon-wrapper">
                <FontAwesomeIcon icon={faRecycle} className="env-recycle-icon" />
              </div>
              <p className="env-info-text">
                Every product is thoughtfully packed in poly bags and card boxes to ensure safe delivery and minimal environmental impact.
              </p>
              <div className="env-leaf-watermark">
                <svg viewBox="0 0 100 100" className="watermark-leaf">
                  <path d="M10,90 Q40,40 85,15" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <div className="env-detail-image-card">
              <img src={workshop10} alt="Rolled Fire Hoses" />
            </div>
            <div className="env-detail-image-card">
              <img src={workshop11} alt="Sewing Hose" />
            </div>
            <div className="env-detail-image-card">
              <img src={workshop12} alt="Riveting Hose" />
            </div>
            <div className="env-detail-image-card">
              <img src={workshop21} alt="Finished Packages" />
            </div>
          </div>
        </section>

        {/* 6. OUR PROCESS TIMELINE */}
        <section className="process-timeline-section">
          <div className="timeline-header">
            <h2 className="timeline-title">OUR PROCESS</h2>
            <div className="timeline-header-underline">
              <svg viewBox="0 0 50 10" className="leaf-arrow-svg">
                <path d="M0,5 Q25,2 50,5 M42,1 L50,5 L42,9" stroke="#1b3a1e" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline-step">
              <div className="step-image-rect">
                <img src={workshop13} alt="Collect" />
              </div>
              <div className="step-content">
                <h3 className="step-num-title">01 <span>COLLECT</span></h3>
                <p>We collect used fire hoses that have completed their service life.</p>
              </div>
              <div className="step-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#688b58" />
                </svg>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-image-rect">
                <img src={workshop14} alt="Clean" />
              </div>
              <div className="step-content">
                <h3 className="step-num-title">02 <span>CLEAN</span></h3>
                <p>Thoroughly cleaned and sanitized for safety.</p>
              </div>
              <div className="step-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#688b58" />
                </svg>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-image-rect">
                <img src={workshop15} alt="Cut & Prepare" />
              </div>
              <div className="step-content">
                <h3 className="step-num-title">03 <span>CUT & PREPARE</span></h3>
                <p>Carefully cut, measured and prepared for crafting.</p>
              </div>
              <div className="step-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#688b58" />
                </svg>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-image-rect">
                <img src={workshop16} alt="Craft" />
              </div>
              <div className="step-content">
                <h3 className="step-num-title">04 <span>CRAFT</span></h3>
                <p>Skilled artisans handcraft each piece with precision and care.</p>
              </div>
              <div className="step-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#688b58" />
                </svg>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-image-rect">
                <img src={workshop17} alt="Quality Check" />
              </div>
              <div className="step-content">
                <h3 className="step-num-title">05 <span>QUALITY CHECK</span></h3>
                <p>Every piece is inspected to ensure durability and flawless finishing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIAL & CONTACT BANNER */}
        <section className="testimonial-cta-section">
          <div className="testimonial-cta-container">
            <div className="testimonial-card-wrapper">
              <div className="testimonial-avatar">
                <img src={workshop18} alt="Sunita Devi" />
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">“</div>
                <p className="testimonial-quote">
                  This work gives me pride and purpose. I love turning something that was discarded into something beautiful and useful.
                </p>
                <div className="testimonial-author">
                  <strong className="author-name">— Sunita Devi</strong>
                  <span className="author-role">Artisan for 8 years</span>
                </div>
              </div>
              <div className="testimonial-leaf-watermark">
                <svg viewBox="0 0 100 100" className="watermark-leaf">
                  <path d="M10,90 Q40,40 85,15" stroke="rgba(27,58,30,0.05)" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
            
            <div className="cta-get-in-touch-card">
              <div className="cta-content">
                <span className="cta-label">GET IN TOUCH</span>
                <h3 className="cta-heading">Want to work with us or learn more about our process? Let's connect.</h3>
                <Link to="/contactus" className="cta-contact-button">
                  <span>CONTACT US</span>
                  <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                </Link>
              </div>
              <div className="cta-bag-illustration">
                <img src={workshop19} alt="Firehose Bag Illustration" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
