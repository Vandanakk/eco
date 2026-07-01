import React from "react";
import { Link } from "react-router-dom";
import Cataluge24 from "../Catalog/Ecowoodies Catalogue.pdf";
import ottomons from '../Catalog/Ecowoodies_Ottoman_Catalog.pdf';
import ottomonset from '../Catalog/Ecowoodies_OttomanSet_Catalog.pdf';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="eco-footer">
      <div className="eco-footer-top-grid">
        {/* Column 1: Branding and Badges */}
        <div className="eco-footer-col eco-footer-brand-col">
          <h2 className="eco-footer-brand-title">ECOWOODIES</h2>
          
          {/* Custom Sofa SVG Logo */}
          <div className="eco-footer-sofa-logo">
            <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sofa Backrest */}
              <path d="M15,35 L15,18 C15,14 25,12 50,12 C75,12 85,14 85,18 L85,35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Cushion */}
              <rect x="10" y="28" width="80" height="10" rx="3" fill="none" stroke="#ffffff" strokeWidth="2" />
              {/* Left Armrest */}
              <path d="M5,24 C5,24 15,22 15,28 L15,38 L10,38 C7,38 5,36 5,33 L5,24 Z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
              {/* Right Armrest */}
              <path d="M95,24 C95,24 85,22 85,28 L85,38 L90,38 C93,38 95,36 95,33 L95,24 Z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
              {/* Legs */}
              <line x1="18" y1="38" x2="18" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <line x1="82" y1="38" x2="82" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              {/* Text inside cushion */}
              <text x="50" y="34.5" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">ecowoodies</text>
            </svg>
          </div>
          
          <span className="eco-footer-brand-tagline">NATURAL LIVING</span>
          
          <p className="eco-footer-brand-desc">
            We craft natural living products using renewable materials and traditional
            techniques &mdash; supporting artisan communities and conscious businesses worldwide.
          </p>
          
          <div className="eco-footer-badges-list">
            <div className="eco-footer-badge-item">
              <div className="eco-footer-badge-icon">
                <i className="fas fa-th"></i>
              </div>
              <span className="eco-footer-badge-text">Handmade by Skilled Artisans</span>
            </div>
            
            <div className="eco-footer-badge-item">
              <div className="eco-footer-badge-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <span className="eco-footer-badge-text">Renewable &amp; Sustainable Materials</span>
            </div>
            
            <div className="eco-footer-badge-item">
              <div className="eco-footer-badge-icon">
                <i className="fas fa-globe"></i>
              </div>
              <span className="eco-footer-badge-text">OEM/ODM &amp; Private Label Exports</span>
            </div>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="eco-footer-col">
          <h3 className="eco-footer-col-title">COMPANY</h3>
          <ul className="eco-footer-links">
            <li><Link to="/whyus">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/partners">Capabilities (OEM/ODM)</Link></li>
            <li><Link to="/whyus">Sustainability</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Collections */}
        <div className="eco-footer-col">
          <h3 className="eco-footer-col-title">COLLECTIONS</h3>
          <ul className="eco-footer-links">
            <li><Link to="/productlist/Bench">Bamboo Patio Collection</Link></li>
            <li><Link to="/category">Furniture</Link></li>
            <li><Link to="/category">Home D&eacute;cor</Link></li>
            <li><Link to="/productlist/Babydollstrollers">Baby Collection</Link></li>
            <li><Link to="/productlist/Ottoman">Ottomans</Link></li>
            <li><Link to="/productlist/PetBeds">Pet Beds</Link></li>
            <li><Link to="/productlist/NewBorns">New Born Props</Link></li>
            <li><Link to="/category">Seasonal &amp; Gifts</Link></li>
            <li><Link to="/bulkorder">Bulk Orders</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="eco-footer-col">
          <h3 className="eco-footer-col-title">RESOURCES</h3>
          <ul className="eco-footer-links">
            <li><a href="#!">FAQs</a></li>
            <li><a href={Cataluge24} target="_blank" rel="noopener noreferrer">Catalogue Download</a></li>
            <li><Link to="/policy">Export &amp; Logistics</Link></li>
          </ul>
        </div>

        {/* Column 5: Connect */}
        <div className="eco-footer-col eco-footer-connect-col">
          <h3 className="eco-footer-col-title">CONNECT</h3>
          
          <div className="eco-footer-contacts">
            <a href="https://wa.me/919686722949" target="_blank" rel="noopener noreferrer" className="eco-footer-contact-item">
              <div className="eco-footer-contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="eco-footer-contact-text">
                <span className="eco-contact-label">WhatsApp</span>
                <span className="eco-contact-value">+91 96867 22949</span>
              </div>
            </a>
            
            <a href="mailto:info@ecowoodies.com" className="eco-footer-contact-item">
              <div className="eco-footer-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="eco-footer-contact-text">
                <span className="eco-contact-label">Email</span>
                <span className="eco-contact-value">info@ecowoodies.com</span>
              </div>
            </a>
            
            <a href="tel:+919686722949" className="eco-footer-contact-item">
              <div className="eco-footer-contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="eco-footer-contact-text">
                <span className="eco-contact-label">Phone</span>
                <span className="eco-contact-value">+91 96867 22949</span>
              </div>
            </a>
          </div>

          <div className="eco-footer-socials">
            <a href="https://www.facebook.com/ecowoodies/" target="_blank" rel="noopener noreferrer" className="eco-footer-social-link">
              <div className="eco-social-icon-circle"><i className="fab fa-facebook-f"></i></div>
              <span className="eco-social-label">Facebook | Ecowoodies</span>
            </a>
            
            <a href="https://twitter.com/ecowoodies" target="_blank" rel="noopener noreferrer" className="eco-footer-social-link">
              <div className="eco-social-icon-circle"><i className="fab fa-twitter"></i></div>
              <span className="eco-social-label">Twitter | @ecowoodies</span>
            </a>
            
            <a href="https://in.pinterest.com/ecowoodies/" target="_blank" rel="noopener noreferrer" className="eco-footer-social-link">
              <div className="eco-social-icon-circle"><i className="fab fa-pinterest"></i></div>
              <span className="eco-social-label">Pinterest | Ecowoodies</span>
            </a>
            
            <a href="https://www.instagram.com/ecowoodies/" target="_blank" rel="noopener noreferrer" className="eco-footer-social-link">
              <div className="eco-social-icon-circle"><i className="fab fa-instagram"></i></div>
              <span className="eco-social-label">Instagram | @ecowoodies</span>
            </a>
            
            <a href="https://in.linkedin.com/company/ecowoodies.com" target="_blank" rel="noopener noreferrer" className="eco-footer-social-link">
              <div className="eco-social-icon-circle"><i className="fab fa-linkedin-in"></i></div>
              <span className="eco-social-label">LinkedIn | Ecowoodies</span>
            </a>
          </div>
        </div>
      </div>

      <div className="eco-footer-bottom">
        <div className="eco-footer-bottom-container">
          <div className="eco-footer-office">
            <i className="fas fa-map-marker-alt eco-bottom-icon"></i>
            <div>
              <strong>Export Office:</strong> A-97, Shalimar Garden Main, Sahibabad, Ghaziabad, UP -201005, INDIA.
            </div>
          </div>
          
          <div className="eco-footer-export-stats">
            <i className="fas fa-globe eco-bottom-icon"></i>
            <div>
              Proudly exporting to <span className="eco-highlight-green">30+ countries worldwide</span>
            </div>
          </div>
          
          <div className="eco-footer-copyright-links">
            <span className="eco-copy-text">&copy; Ecowoodies 2024. All rights reserved.</span>
            <div className="eco-policy-links">
              <Link to="/policy">Privacy Policy</Link>
              <span className="eco-dot-divider">&bull;</span>
              <Link to="/policy">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;