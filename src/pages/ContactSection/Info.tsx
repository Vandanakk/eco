import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './info.css'

const Info = () => (
  <section className="info-section-container">
    <div className="info-glass-card">
      <h3 className="info-card-header">Contact Information</h3>
      <p className="info-card-subheader">Reach out to us directly through any of these channels.</p>
      
      <div className="info-details-list">
        <div className="info-item-box">
          <div className="info-icon-wrapper">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className="info-item-content">
            <span className="info-item-label">Head Office</span>
            <span className="info-item-value">A-97, Shalimar Garden Main, Sahibabad, Ghaziabad, UP - 201005, India.</span>
          </div>
        </div>

        <a href="tel:+919586722949" className="info-item-box interactive">
          <div className="info-icon-wrapper">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="info-item-content">
            <span className="info-item-label">Call or WhatsApp</span>
            <span className="info-item-value">+91 9586722949</span>
          </div>
        </a>

        <a href="mailto:info@ecowoodies.com" className="info-item-box interactive">
          <div className="info-icon-wrapper">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="info-item-content">
            <span className="info-item-label">Email Address</span>
            <span className="info-item-value">info@ecowoodies.com</span>
          </div>
        </a>
      </div>

      <div className="info-divider"></div>

      <div className="info-welcome-rich-text">  
        <p className="welcome-highlight">Welcome to Ecowoodies,</p>
        <p className="welcome-body">
          your premier destination for high-quality, sustainable bamboo and cane furniture. We understand that selecting the perfect furniture is an investment in your lifestyle, and we are committed to making your experience seamless and satisfying.
        </p>
        <p className="welcome-footer">
          Connect with our design team today and discover how our bespoke collections can transform your spaces.
        </p>
      </div>
    </div>
  </section>
)

export default Info;