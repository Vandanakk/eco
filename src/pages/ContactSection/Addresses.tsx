import React from "react";
import "./Addresses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faBuilding, faHome, faIndustry } from "@fortawesome/free-solid-svg-icons";

const Addresses = () => {
  return (
    <div className="addresses-container">
      <div className="address-card">
        <div className="address-card-icon-container">
          <div className="address-card-circle-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
        </div>
        <div className="address-card-content">
          <h4 className="address-card-title">Marketing Office - Bangalore</h4>
          <p className="address-card-detail">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="address-pin-icon" />
            <span># 01035, Varthur, Panathur Main Road, Whitefield, Bangalore - 560087, India</span>
          </p>
          <p className="address-card-detail">
            <FontAwesomeIcon icon={faPhone} className="address-pin-icon" />
            <span>+91 9310618686</span>
          </p>
        </div>
      </div>

      <div className="address-card">
        <div className="address-card-icon-container">
          <div className="address-card-circle-icon">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        <div className="address-card-content">
          <h4 className="address-card-title">Workshop - Garh Mukteshwar</h4>
          <p className="address-card-detail">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="address-pin-icon" />
            <span>No. 3/35 Ahela Basti Ram, Garh Mukteshwar, Uttar Pradesh - 245205, India</span>
          </p>
        </div>
      </div>

      <div className="address-card">
        <div className="address-card-icon-container">
          <div className="address-card-circle-icon">
            <FontAwesomeIcon icon={faIndustry} />
          </div>
        </div>
        <div className="address-card-content">
          <h4 className="address-card-title">Workshop - Tripura</h4>
          <p className="address-card-detail">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="address-pin-icon" />
            <span>967, Business Netaji Nagar, Teliamura, Khowai, Tripura - 799205, India</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addresses;