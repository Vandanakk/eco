import React from "react";
import "./Addresses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faBuilding, faHome, faIndustry, faDirections } from "@fortawesome/free-solid-svg-icons";

const Addresses = () => {
  return (
    <div className="addresses-outer-wrapper">
      <div className="addresses-header">
        <span className="addresses-badge">OUR LOCATIONS</span>
        <h3 className="addresses-title">Visit Our Offices & Workshops</h3>
        <p className="addresses-subtitle">Our presence across India enables efficient manufacturing and seamless distribution.</p>
      </div>
      
      <div className="addresses-container">
        {/* Card 1 */}
        <div className="address-card">
          <div className="address-card-header">
            <div className="address-card-circle-icon">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <h4 className="address-card-title">Marketing Office - Bangalore</h4>
          </div>
          
          <div className="address-card-content">
            <p className="address-card-detail">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="address-pin-icon" />
              <span># 01035, Varthur, Panathur Main Road, Whitefield, Bangalore - 560087, India</span>
            </p>
            <p className="address-card-detail">
              <FontAwesomeIcon icon={faPhone} className="address-pin-icon" />
              <a href="tel:+919310618686" className="address-phone-link">+91 9310618686</a>
            </p>
          </div>
          
          <div className="address-card-footer">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=01035+Varthur+Panathur+Main+Road+Whitefield+Bangalore+560087" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="address-directions-link"
            >
              Get Directions <FontAwesomeIcon icon={faDirections} className="directions-btn-icon" />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="address-card">
          <div className="address-card-header">
            <div className="address-card-circle-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <h4 className="address-card-title">Workshop - Garh Mukteshwar</h4>
          </div>
          
          <div className="address-card-content">
            <p className="address-card-detail mb-more">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="address-pin-icon" />
              <span>No. 3/35 Ahela Basti Ram, Garh Mukteshwar, Uttar Pradesh - 245205, India</span>
            </p>
          </div>
          
          <div className="address-card-footer">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=No+3+35+Ahela+Basti+Ram+Garh+Mukteshwar+Uttar+Pradesh+245205" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="address-directions-link"
            >
              Get Directions <FontAwesomeIcon icon={faDirections} className="directions-btn-icon" />
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="address-card">
          <div className="address-card-header">
            <div className="address-card-circle-icon">
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <h4 className="address-card-title">Workshop - Tripura</h4>
          </div>
          
          <div className="address-card-content">
            <p className="address-card-detail mb-more">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="address-pin-icon" />
              <span>967, Business Netaji Nagar, Teliamura, Khowai, Tripura - 799205, India</span>
            </p>
          </div>
          
          <div className="address-card-footer">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=967+Business+Netaji+Nagar+Teliamura+Khowai+Tripura+799205" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="address-directions-link"
            >
              Get Directions <FontAwesomeIcon icon={faDirections} className="directions-btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;