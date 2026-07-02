import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, faLeaf, faSync, faCheckCircle, 
  faChevronRight, faBoxes, faShieldAlt, 
  faTruck, faClock, faEnvelope, faAward,
  faGlobe, faTools, faCogs
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../component/Footer/footer";
import "./workshop.css";

// Images from assets
import workshopHero from "../../images/workshop_hero.png";
import productionImg from "../../images/production.jpg";
import craftsmanshipImg from "../../images/craftsmanship.jpg";
import whoweareImg from "../../images/whoweare.jpg";
import ourstoryImg from "../../images/ourstroy.jpg";
import ecofriendlyImg from "../../images/ecofriendly.jpg";
import basketImg from "../../images/basket13.jpg"; // stack of baskets
import stoolImg from "../../images/stool3.png";


export default function Workshop() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Our Workshop - Ecowoodies</title>
        <meta name="description" content="Discover our crafting process, sustainable workshop practices, and packaging standards." />
      </Helmet>

      <div className="workshop-page">
        {/* Background Decorative Patterns */}
        <div className="workshop-bg-patterns">
          {/* Blurred Glow Spheres */}
          <div className="bg-glow glow-1" />
          <div className="bg-glow glow-2" />
          <div className="bg-glow glow-3" />

          {/* Leaf Watermarks */}
          <div className="bg-pattern pattern-left-1">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-right-1">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-left-2">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-right-2">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <section className="workshop-hero">
          <div className="workshop-hero-content">
            <span className="section-badge">OUR WORKSHOP</span>
            <h1 className="hero-title">Crafted with Skill.<br />Built on Sustainability.</h1>
            <p className="hero-desc">
              At Ecowoodies, our workshop is where tradition meets innovation. From initial designs to responsible processes, every piece we create reflects our commitment to quality, people, and the planet.
            </p>

            <div className="workshop-values-grid">
              <div className="value-item">
                <span className="value-icon"><FontAwesomeIcon icon={faUsers} /></span>
                <span className="value-label">Skilled Artisans</span>
              </div>
              <div className="value-item">
                <span className="value-icon"><FontAwesomeIcon icon={faLeaf} /></span>
                <span className="value-label">Sustainable Materials</span>
              </div>
              <div className="value-item">
                <span className="value-icon"><FontAwesomeIcon icon={faSync} /></span>
                <span className="value-label">Ethical Production</span>
              </div>
              <div className="value-item">
                <span className="value-icon"><FontAwesomeIcon icon={faCheckCircle} /></span>
                <span className="value-label">Quality Assured</span>
              </div>
            </div>
          </div>

          <div className="workshop-hero-image-wrapper">
            <div className="main-image-card">
              <div className="factory-image-container">
                <img src={workshopHero} alt="Ecowoodies Workshop Building" className="factory-image" />
              </div>
              <div className="inset-circle-image">
                <img src={productionImg} alt="Artisan inside workshop" />
              </div>
            </div>
          </div>

          {/* Wavy Section Divider */}
          <div className="section-wave wave-green">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#2d4c36" />
            </svg>
          </div>
        </section>

        {/* Our Crafting Process Section */}
        <section className="crafting-process-section">
          <div className="section-header text-center">
            <span className="subtitle-badge">OUR CRAFTING PROCESS</span>
            <h2 className="section-title">From Raw Material to Remarkable Creations</h2>
            <p className="section-subtitle">
              A dedicated process that ensures every product is eco-friendly, durable, and beautifully handcrafted.
            </p>
          </div>

          <div className="process-flow">
            <div className="process-step">
              <div className="step-number-badge">1</div>
              <div className="step-icon-box">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h4 className="step-name">Material Selection</h4>
              <p className="step-desc">We carefully select premium rattan, cane, seagrass, bamboo, and other sustainable materials.</p>
            </div>

            <div className="flow-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <div className="process-step">
              <div className="step-number-badge">2</div>
              <div className="step-icon-box">
                <FontAwesomeIcon icon={faTools} />
              </div>
              <h4 className="step-name">Handcrafted by Artisans</h4>
              <p className="step-desc">Our skilled artisans handcraft each product with precision and attention to detail.</p>
            </div>

            <div className="flow-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <div className="process-step">
              <div className="step-number-badge">3</div>
              <div className="step-icon-box">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h4 className="step-name">Quality Inspection</h4>
              <p className="step-desc">Every piece undergoes strict quality checks to ensure durability and flawless finish.</p>
            </div>

            <div className="flow-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <div className="process-step">
              <div className="step-number-badge">4</div>
              <div className="step-icon-box">
                <FontAwesomeIcon icon={faCogs} />
              </div>
              <h4 className="step-name">Finishing & Polishing</h4>
              <p className="step-desc">Products are finished with care to enhance natural beauty and ensure long-lasting use.</p>
            </div>

            <div className="flow-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <div className="process-step">
              <div className="step-number-badge">5</div>
              <div className="step-icon-box">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h4 className="step-name">Ready for You</h4>
              <p className="step-desc">Sustainable, stylish, and functional pieces, ready to be a part of your space.</p>
            </div>
          </div>
          {/* Wavy Section Divider */}
          <div className="section-wave wave-green">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#2d4c36" />
            </svg>
          </div>
        </section>

        {/* Inside Our Workshop Section */}
        <section className="inside-workshop-section">
          <div className="section-header text-center">
            <h2 className="section-title">Inside Our Workshop</h2>
          </div>

          <div className="workshop-gallery">
            <div className="gallery-item">
              <div className="gallery-image-box">
                <img src={craftsmanshipImg} alt="Handcrafting with Heritage" />
              </div>
              <h5 className="gallery-caption">
                <FontAwesomeIcon icon={faLeaf} className="gallery-caption-icon" /> Handcrafting with Heritage
              </h5>
            </div>

            <div className="gallery-item">
              <div className="gallery-image-box">
                <img src={whoweareImg} alt="Skilled Hands, Timeless Craft" />
              </div>
              <h5 className="gallery-caption">
                <FontAwesomeIcon icon={faLeaf} className="gallery-caption-icon" /> Skilled Hands, Timeless Craft
              </h5>
            </div>

            <div className="gallery-item">
              <div className="gallery-image-box">
                <img src={ourstoryImg} alt="Crafting Quality at Every Step" />
              </div>
              <h5 className="gallery-caption">
                <FontAwesomeIcon icon={faLeaf} className="gallery-caption-icon" /> Crafting Quality at Every Step
              </h5>
            </div>

            <div className="gallery-item">
              <div className="gallery-image-box">
                <img src={ecofriendlyImg} alt="Diverse Designs, Endless Possibilities" />
              </div>
              <h5 className="gallery-caption">
                <FontAwesomeIcon icon={faLeaf} className="gallery-caption-icon" /> Diverse Designs, Endless Possibilities
              </h5>
            </div>
          </div>
          {/* Woven rattan divider */}
          <div className="section-wave wave-rattan" />
        </section>

        {/* Packaging & Delivery Section */}
        <section className="packaging-delivery-section">
          <div className="section-header text-center">
            <span className="subtitle-badge">PACKAGING & DELIVERY</span>
            <h2 className="section-title">Carefully Packed. Delivered Safely.</h2>
            <p className="section-subtitle">We ensure every order reaches you in perfect condition, on time, every time.</p>
          </div>

          <div className="delivery-cards-grid">
            <div className="delivery-card">
              <span className="delivery-icon"><FontAwesomeIcon icon={faBoxes} /></span>
              <h4 className="delivery-card-title">Secure Packaging</h4>
              <p className="delivery-card-desc">Eco-friendly packaging in poly bags and durable cardboard boxes.</p>
              <div className="delivery-illustration">
                <svg viewBox="0 0 100 100">
                  <path d="M20,35 L50,20 L80,35 L50,50 Z" fill="#e3b47c" stroke="#b07d3a" strokeWidth="1.5" />
                  <path d="M20,35 L20,70 L50,85 L50,50 Z" fill="#d19c5c" stroke="#b07d3a" strokeWidth="1.5" />
                  <path d="M80,35 L80,70 L50,85 L50,50 Z" fill="#be8a4b" stroke="#b07d3a" strokeWidth="1.5" />
                  <path d="M50,50 L50,85" stroke="#b07d3a" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="delivery-card">
              <span className="delivery-icon"><FontAwesomeIcon icon={faShieldAlt} /></span>
              <h4 className="delivery-card-title">Strong & Safe Boxes</h4>
              <p className="delivery-card-desc">High-quality corrugated boxes to protect products during transit.</p>
              <div className="delivery-illustration stacked-boxes">
                <svg viewBox="0 0 100 100">
                  <path d="M35,40 L60,28 L85,40 L60,52 Z" fill="#be8a4b" stroke="#906028" strokeWidth="1.5" opacity="0.8" />
                  <path d="M35,40 L35,68 L60,80 L60,52 Z" fill="#ab7a3c" stroke="#906028" strokeWidth="1.5" opacity="0.8" />
                  <path d="M85,40 L85,68 L60,80 L60,52 Z" fill="#9a692d" stroke="#906028" strokeWidth="1.5" opacity="0.8" />
                  <path d="M15,50 L45,35 L75,50 L45,65 Z" fill="#e3b47c" stroke="#b07d3a" strokeWidth="1.5" />
                  <path d="M15,50 L15,80 L45,95 L45,65 Z" fill="#d19c5c" stroke="#b07d3a" strokeWidth="1.5" />
                  <path d="M75,50 L75,80 L45,95 L45,65 Z" fill="#be8a4b" stroke="#b07d3a" strokeWidth="1.5" />
                  <path d="M45,65 L45,95" stroke="#b07d3a" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="delivery-card delivery-partners-card">
              <span className="delivery-icon"><FontAwesomeIcon icon={faTruck} /></span>
              <h4 className="delivery-card-title">Delivery Partners</h4>
              <p className="delivery-card-desc">We partner with trusted courier services for timely and safe delivery.</p>
              <div className="partners-logos-grid">
                <span>TNT</span>
                <span>UPS</span>
                <span>SF Express</span>
                <span>FedEx</span>
                <span>EMS</span>
                <span>DHL</span>
              </div>
            </div>

            <div className="delivery-card">
              <span className="delivery-icon"><FontAwesomeIcon icon={faCogs} /></span>
              <h4 className="delivery-card-title">Careful Loading</h4>
              <p className="delivery-card-desc">Products are handled with care and loaded securely for safe transport.</p>
              <div className="delivery-illustration">
                <svg viewBox="0 0 100 100">
                  <path d="M30,15 L30,75 L75,75 M30,55 L55,55 M30,35 L55,35" fill="none" stroke="#777" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="38" cy="82" r="7" fill="#444" />
                  <circle cx="68" cy="82" r="7" fill="#444" />
                  <rect x="36" y="25" width="28" height="48" rx="2" fill="#d19c5c" stroke="#b07d3a" strokeWidth="1.5" />
                  <line x1="36" y1="49" x2="64" y2="49" stroke="#b07d3a" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="delivery-card">
              <span className="delivery-icon"><FontAwesomeIcon icon={faClock} /></span>
              <h4 className="delivery-card-title">On-Time, Every Time</h4>
              <p className="delivery-card-desc">Fast delivery and 100% quality assurance for complete peace of mind.</p>
              <div className="delivery-illustration image-illustration">
                <img src={stoolImg} alt="Cane stool" />
              </div>
            </div>
          </div>
          {/* Wavy Section Divider */}
          <div className="section-wave wave-green">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#2d4c36" />
            </svg>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="workshop-cta-banner">
          <div className="cta-left">
            <h2 className="cta-title">Let's Create Something Beautiful</h2>
            <p className="cta-subtitle text-left">
              Premium quality, sustainable, handcrafted products that make a difference.
            </p>
            <Link to="/contactus" className="cta-btn-green">
              Get in Touch <FontAwesomeIcon icon={faChevronRight} className="btn-arrow" />
            </Link>

            <div className="cta-features">
              <div className="cta-feature-item">
                <span className="feat-icon"><FontAwesomeIcon icon={faCogs} /></span>
                <div className="feat-text">
                  <h6>Custom Solutions</h6>
                  <p>Tailored designs for your unique needs</p>
                </div>
              </div>

              <div className="cta-feature-item">
                <span className="feat-icon"><FontAwesomeIcon icon={faLeaf} /></span>
                <div className="feat-text">
                  <h6>Sustainable Choice</h6>
                  <p>Eco-friendly materials only</p>
                </div>
              </div>

              <div className="cta-feature-item">
                <span className="feat-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                <div className="feat-text">
                  <h6>Trusted by Many</h6>
                  <p>Join thousands of happy customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-right">
            <img src={basketImg} alt="Crafted baskets and plant" className="cta-basket-img" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
