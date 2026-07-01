import React from "react";
import { Link } from 'react-router-dom';
import trendings from "../../trendings"; 
import './trending.css';

const formatCategory = (cat: string) => {
  switch (cat) {
    case "Kidchairs": return "Kids Chairs";
    case "Babydollstrollers": return "Doll Strollers";
    case "Hangingchairs": return "Hanging Chairs";
    case "Ottoman": return "Ottomans & Stools";
    case "NewBorns": return "New Born Props";
    case "baskets": return "Baskets";
    case "PetBeds": return "Pet Beds";
    case "storagebox": return "Storage Boxes";
    case "trays": return "Trays";
    default: return cat.replace(/Category/g, "");
  }
};

const Trending = () => {
  return (
    <section className="eco-section eco-trending-section">
      <div className="eco-section-container">
        {/* Top-Left Leafy Branch SVG */}
        <svg className="eco-decor-leaf eco-decor-tl" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,-10 Q40,25 90,80" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M15,10 C5,20 12,32 25,25 C38,18 30,5 15,10 Z" fill="#8cb978" opacity="0.75" />
          <path d="M35,28 C25,38 32,50 45,43 C58,36 50,23 35,28 Z" fill="#9bc388" opacity="0.8" />
          <path d="M55,48 C45,58 52,70 65,63 C78,56 70,43 55,48 Z" fill="#8cb978" opacity="0.75" />
          <path d="M22,12 C35,2 45,10 38,20 C31,30 18,22 22,12 Z" fill="#b0d59e" opacity="0.7" />
          <path d="M42,30 C55,20 65,28 58,38 C51,48 38,40 42,30 Z" fill="#9bc388" opacity="0.8" />
        </svg>

        {/* Top-Right Corner Woven Rattan Plate SVG */}
        <svg className="eco-decor-woven" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="0" r="85" stroke="#75a165" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="100" cy="0" r="70" stroke="#75a165" strokeWidth="1.5" />
          <circle cx="100" cy="0" r="55" stroke="#75a165" strokeWidth="1" strokeDasharray="4,2" />
          <circle cx="100" cy="0" r="40" stroke="#75a165" strokeWidth="1.5" />
          <circle cx="100" cy="0" r="25" stroke="#75a165" strokeWidth="1" />
          <line x1="100" y1="0" x2="15" y2="0" stroke="#75a165" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="85" stroke="#75a165" strokeWidth="1" />
          <line x1="100" y1="0" x2="40" y2="60" stroke="#75a165" strokeWidth="1" />
          <line x1="100" y1="0" x2="70" y2="70" stroke="#75a165" strokeWidth="1" />
          <line x1="100" y1="0" x2="25" y2="35" stroke="#75a165" strokeWidth="1" />
          <line x1="100" y1="0" x2="55" y2="25" stroke="#75a165" strokeWidth="1" />
          <path d="M100,0 A40,40 0 0,0 60,40 L100,40 Z" fill="#e5c890" opacity="0.2" />
          <path d="M100,0 A70,70 0 0,0 30,70 L100,70 Z" fill="#e5c890" opacity="0.1" />
        </svg>

        <div className="eco-section-header">
          <span className="eco-section-subtitle">POPULAR DEMAND</span>
          <h2 className="eco-section-title">Trending</h2>
          <div className="eco-section-divider"></div>
        </div>
       
        <div className="eco-grid-container">
          <div className="eco-grid">
            {trendings
              .filter((item) => item.featured === true)
              .map((productCategory, index) => {
                const { image, category } = productCategory;
                return (
                  <div key={index} className="eco-grid-col">
                    <Link to={`/productlist/${category}`} className="eco-card-link">
                      <div className="eco-product-card">
                        <div className="eco-product-image-wrapper">
                          <span className="eco-product-category-badge">
                            {formatCategory(category)}
                          </span>
                          <img
                            src={image}
                            alt="Trending Product"
                            className="eco-product-image"
                            loading="lazy"
                          />
                          <div className="eco-product-overlay">
                            <span className="eco-overlay-btn">Explore Now</span>
                          </div>
                        </div>
                        <div className="eco-product-body trending-body">
                          <div className="eco-product-footer">
                            <span className="eco-explore-text">
                              Explore Now <i className="fas fa-chevron-right eco-arrow-icon"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Trending;