import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './info.css'

const Info = () => (
  <section className="info">
    <div className="info-details-container">
      <div className="info-detail-item">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
        <span className="info-text">A-97, Shalimar Garden Main, Sahibabad, Ghaziabad, UP -201005. INDIA.</span>
      </div>
      <div className="info-detail-item">
        <FontAwesomeIcon icon={faPhone} className="info-icon" />
        <span className="info-text">+91 9586722949</span>
      </div>
      <div className="info-detail-item">
        <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
        <span className="info-text">info@ecowoodies.com</span>
      </div>
    </div>
    
    <div className="info-welcome-text">  
      Welcome to Ecowoodies, your one-stop-shop for high-quality bamboo and cane furniture.                
      We understand that furniture is an important investment and we are committed to providing
      you with exceptional customer service. Our sales team will guide you through the entire process,
      from selecting the right pieces to arranging delivery and installation, ensuring a hassle-free
      experience.     
      
      So why wait? Connect with our sales team today and discover the many
      benefits of our beautiful and sustainable bamboo
      and cane furniture. We look forward to hearing from you!    
    </div>
  </section>
)

export default Info