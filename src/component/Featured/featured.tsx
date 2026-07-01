import React from "react";
import { Link } from 'react-router-dom';
import categories from "../../categories"; 
import './featured.css';

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

const Featured = () => {
  return (
    <section className="eco-section eco-featured-section">
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

        {/* Bottom-Left Leafy Branch SVG */}
        <svg className="eco-decor-leaf eco-decor-bl" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-10,130 Q25,80 80,40" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M10,105 C2,95 8,82 20,88 C32,94 25,110 10,105 Z" fill="#8cb978" opacity="0.75" />
          <path d="M30,85 C22,75 28,62 40,68 C52,74 45,90 30,85 Z" fill="#9bc388" opacity="0.8" />
          <path d="M12,98 C22,108 35,102 30,90 C25,78 10,88 12,98 Z" fill="#b0d59e" opacity="0.7" />
          <path d="M32,78 C42,88 55,82 50,70 C45,58 30,68 32,78 Z" fill="#8cb978" opacity="0.75" />
        </svg>

        {/* Top-Right Leafy Branch SVG */}
        <svg className="eco-decor-leaf eco-decor-tr" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M130,-10 Q80,30 30,90" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M105,15 C95,5 82,12 88,25 C94,38 110,30 105,15 Z" fill="#8cb978" opacity="0.75" />
          <path d="M85,35 C75,25 62,32 68,45 C74,58 90,50 85,35 Z" fill="#9bc388" opacity="0.8" />
          <path d="M98,22 C108,32 102,45 90,40 C78,35 88,20 98,22 Z" fill="#b0d59e" opacity="0.7" />
          <path d="M78,42 C88,52 82,65 70,60 C58,55 68,40 78,42 Z" fill="#8cb978" opacity="0.75" />
        </svg>

        <div className="eco-section-header">
          <span className="eco-section-subtitle">FRESHLY CRAFTED</span>
          <h2 className="eco-section-title">New Arrivals</h2>
          <div className="eco-section-divider"></div>
        </div>
       
        <div className="eco-grid-container">
          <div className="eco-grid">
            {categories
              .filter((item) => item.featured === true && item.shipping === true)
              .map((productCategory, index) => {
                const { id, image, name, category } = productCategory;
                return (
                  <div key={`${id}-${index}`} className="eco-grid-col">
                    <Link to={`/productlist/${category}`} className="eco-card-link">
                      <div className="eco-product-card">
                        <div className="eco-product-image-wrapper">
                          <span className="eco-product-category-badge">
                            {formatCategory(category)}
                          </span>
                          <img
                            src={image}
                            alt={name}
                            className="eco-product-image"
                            loading="lazy"
                          />
                          <div className="eco-product-overlay">
                            <span className="eco-overlay-btn">View Category</span>
                          </div>
                        </div>
                        <div className="eco-product-body">
                          <h3 className="eco-product-title">{name}</h3>
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

export default Featured;