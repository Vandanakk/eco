import React from "react";
import { Link } from "react-router-dom";
import storageBoxImg from "../../images/storageBox.jpg";
import Cataluge24 from "../Catalog/Ecowoodies Catalogue.pdf";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="eco-hero-container">
      {/* Top Hero Section */}
      <div className="eco-hero-content-wrapper">
        {/* Left Column: Copywriting & CTA */}
        <div className="eco-hero-left">
          <span className="eco-hero-tagline">
            HANDCRAFTED &bull; SUSTAINABLE &bull; EXPORT-READY
          </span>
          <h1 className="eco-hero-title">
            Handcrafted Natural Living, Made for <span className="eco-highlight">the World</span>
          </h1>
          <p className="eco-hero-desc">
            Ecowoodies designs and manufactures rattan, seagrass, and wicker home
            d&eacute;cor, baby products, and furniture for retailers, distributors,
            and private-label brands across the globe.
          </p>

          <div className="eco-hero-actions">
            <a href={Cataluge24} target="_blank" rel="noopener noreferrer" className="eco-btn eco-btn-primary">
              Request a Catalogue
            </a>
            <Link to="/category" className="eco-btn eco-btn-secondary">
              Explore Collections
            </Link>
          </div>

          <div className="eco-hero-badges">
            <div className="eco-badge-item">
              <div className="eco-badge-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <span className="eco-badge-text">Sustainable Materials</span>
            </div>
            <div className="eco-badge-item">
              <div className="eco-badge-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <span className="eco-badge-text">Ethical Craftsmanship</span>
            </div>
            <div className="eco-badge-item">
              <div className="eco-badge-icon">
                <i className="fas fa-globe"></i>
              </div>
              <span className="eco-badge-text">Global Partnerships</span>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Image */}
        <div className="eco-hero-right">
          <div className="eco-hero-image-container">
            <img src={storageBoxImg} alt="Ecowoodies Handcrafted Furniture" className="eco-hero-image" />
          </div>
        </div>
      </div>

      {/* Wave Transition 1 (Hero to Stats) */}
      <div className="eco-wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C400,30 800,30 1440,100 L1440,100 L0,100 Z" fill="#fafdf7" />
        </svg>
      </div>

      {/* Stats Section */}
      <div className="eco-stats-section">
        <div className="eco-stats-grid">
          {/* Stat 1 */}
          <div className="eco-stat-card">
            <div className="eco-stat-icon-wrapper">
              <i className="fas fa-award"></i>
            </div>
            <div className="eco-stat-content">
              <h3 className="eco-stat-number">40+</h3>
              <h4 className="eco-stat-title">Years of Craftsmanship</h4>
              <p className="eco-stat-desc">Committed to quality since inception</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="eco-stat-card">
            <div className="eco-stat-icon-wrapper">
              <i className="fas fa-globe-americas"></i>
            </div>
            <div className="eco-stat-content">
              <h3 className="eco-stat-number">30+</h3>
              <h4 className="eco-stat-title">Countries Served</h4>
              <p className="eco-stat-desc">Trusted by partners worldwide</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="eco-stat-card">
            <div className="eco-stat-icon-wrapper">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="eco-stat-content">
              <h3 className="eco-stat-number">500+</h3>
              <h4 className="eco-stat-title">Global Partners</h4>
              <p className="eco-stat-desc">Long-term relationships built on trust</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="eco-stat-card">
            <div className="eco-stat-icon-wrapper">
              <i className="fas fa-leaf"></i>
            </div>
            <div className="eco-stat-content">
              <h3 className="eco-stat-number">100%</h3>
              <h4 className="eco-stat-title">Sustainable Materials</h4>
              <p className="eco-stat-desc">Natural, renewable, responsibly sourced</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition 2 (Stats to Main Page Content) */}
      <div className="eco-wave-divider bottom-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C400,70 800,70 1440,0 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
