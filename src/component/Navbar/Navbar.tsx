import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logos from "../../images/NewLogoECowoodies.png";
import Cataluge24 from "../Catalog/Ecowoodies Catalogue.pdf";
import ottomons from '../Catalog/Ecowoodies_Ottoman_Catalog.pdf';
import ottomonset from '../Catalog/Ecowoodies_OttomanSet_Catalog.pdf';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="eco-header">
      {/* Top Bar for Contact & CTA */}
      <div className="eco-header-top">
        <div className="eco-contact-info">
          <a href="tel:+919686722949" className="eco-contact-item">
            <i className="fas fa-phone-alt"></i> +91 96867 22949
          </a>
          <a href="mailto:info@ecowoodies.com" className="eco-contact-item">
            <i className="fas fa-envelope"></i> info@ecowoodies.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="eco-navbar-container">
        <Link to="/" className="eco-logo-link" onClick={closeMenu}>
          <img src={logos} alt="ECOWOODIES" className="eco-logo" />
        </Link>

        {/* Hamburger Toggler for Mobile */}
        <button className="eco-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* Navigation Links */}
        <nav className={`eco-nav ${isOpen ? "open" : ""}`}>
          <ul className="eco-nav-list">
            <li>
              <Link to="/" className={`eco-nav-link ${isActive("/")}`} onClick={closeMenu}>Home</Link>
            </li>
            <li className="eco-nav-dropdown-wrapper">
              <Link to="/category" className={`eco-nav-link ${isActive("/category")}`} onClick={closeMenu}>
                Products <i className="fas fa-chevron-down dropdown-arrow"></i>
              </Link>
              <ul className="eco-dropdown-menu">
                <li><Link to="/category" onClick={closeMenu}>All Categories</Link></li>
                <li><a href="https://www.ecowoodies.in" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Shop Online</a></li>
              </ul>
            </li>
            <li>
              <Link to="/services" className={`eco-nav-link ${isActive("/services")}`} onClick={closeMenu}>Services</Link>
            </li>
            <li>
              <Link to="/blogs" className={`eco-nav-link ${isActive("/blogs")}`} onClick={closeMenu}>Blogs</Link>
            </li>
            <li>
              <Link to="/videos" className={`eco-nav-link ${isActive("/videos")}`} onClick={closeMenu}>Videos</Link>
            </li>
            <li>
              <Link to="/workshop" className={`eco-nav-link ${isActive("/workshop")}`} onClick={closeMenu}>Workshop</Link>
            </li>
            <li>
              <Link to="/csr" className={`eco-nav-link ${isActive("/csr")}`} onClick={closeMenu}>CSR</Link>
            </li>
            <li className="eco-nav-dropdown-wrapper">
              <span className="eco-nav-link-span">
                About Us <i className="fas fa-chevron-down dropdown-arrow"></i>
              </span>
              <ul className="eco-dropdown-menu">
                <li><Link to="/whyus" onClick={closeMenu}>Why Us</Link></li>
                <li><Link to="/partners" onClick={closeMenu}>Our Partners</Link></li>
                <li><Link to="/designers" onClick={closeMenu}>Our Designers</Link></li>
              </ul>
            </li>
            <li className="eco-nav-dropdown-wrapper">
              <span className="eco-nav-link-span">
                Catalogue <i className="fas fa-chevron-down dropdown-arrow"></i>
              </span>
              <ul className="eco-dropdown-menu">
                <li><a href={Cataluge24} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Catalogue 2024</a></li>
                <li><a href={ottomons} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Stools / Ottoman</a></li>
                <li><a href={ottomonset} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Ottoman Set</a></li>
              </ul>
            </li>
            <li>
              <Link to="/contactus" className={`eco-nav-link ${isActive("/contactus")}`} onClick={closeMenu}>Contact Us</Link>
            </li>
            
            {/* Mobile Contact & Quote button */}
            <li className="eco-mobile-only eco-mobile-contact">
              <a href="tel:+919686722949" className="eco-contact-item">
                <i className="fas fa-phone-alt"></i> +91 96867 22949
              </a>
              <a href="mailto:info@ecowoodies.com" className="eco-contact-item">
                <i className="fas fa-envelope"></i> info@ecowoodies.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;