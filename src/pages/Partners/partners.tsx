import { Link } from "react-router-dom";
import "./partners.css";

import ourpartners from "../../images/ourpartners.jpg";
import customization from "../../images/customization.jpg";
import oemodm from "../../images/oemodm.jpg";
import qualitycontrol from "../../images/qualitycontrol.jpg";
import packaging from "../../images/packaging.jpg";

import Footer from "../../component/Footer/footer";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faAward, faTruckLoading, faTools, faCoffee, faHotel, faStore, faDraftingCompass, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Partners = () => {
  const { t } = useTranslation(); 
  return (
    <>
      <Helmet>
        <title>{t('PARTNER_HEADER')}</title>
        <meta name="description" content={t('PARTNER_CONTENT')} />
      </Helmet>

      <div className="partners-page-wrapper">
        {/* Hero Section */}
        <section className="partners-hero-section">
          <div className="partners-hero-overlay"></div>
          <img className="partners-hero-image" src={ourpartners} alt="Our Partners" />
          <div className="partners-hero-content">
            <span className="partners-badge">GLOBAL COLLABORATIONS</span>
            <h1 className="partners-title">Our Trusted Partners & Clients</h1>
            <p className="partners-subtitle">
              We collaborate with retailers, designers, and hotels globally to deliver premium, sustainable furniture.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="partners-intro-section">
          <div className="partners-intro-card">
            <h2 className="partners-section-title">Partnering for a Sustainable Future</h2>
            <p className="partners-intro-text">
              At Ecowoodies, we believe in creating lasting partnerships built on trust, quality, and mutual values. For decades, we have been supplying custom-made, hand-crafted bamboo and rattan furniture to hotels, cafes, retail chains, and interior designers across the globe. Our capability to customize and scale production makes us the ideal choice for business partnerships.
            </p>
          </div>
        </section>

        {/* Value Proposition Section (What we offer) */}
        <section className="partners-offerings-section">
          <div className="partners-section-header">
            <span className="partners-badge">BUSINESS SERVICES</span>
            <h3 className="partners-subsection-title">What We Offer Our Partners</h3>
            <p className="partners-subsection-subtitle">Robust infrastructure and design expertise tailored for commercial needs.</p>
          </div>

          <div className="partners-offerings-grid">
            {/* Card 1 */}
            <div className="offering-card">
              <div className="offering-image-box">
                <img src={customization} alt="Bespoke Customization" className="offering-image" />
              </div>
              <div className="offering-content">
                <div className="offering-icon-title">
                  <FontAwesomeIcon icon={faTools} className="offering-icon" />
                  <h4>Bespoke Customization</h4>
                </div>
                <p>Over 80% of our products are customized. We work from your blueprints or dimensions to create bespoke designs unique to your project.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="offering-card">
              <div className="offering-image-box">
                <img src={oemodm} alt="OEM & ODM Services" className="offering-image" />
              </div>
              <div className="offering-content">
                <div className="offering-icon-title">
                  <FontAwesomeIcon icon={faBuilding} className="offering-icon" />
                  <h4>OEM & ODM Capacity</h4>
                </div>
                <p>We provide full white-label and design manufacturing services. Add your branding and let us handle fabrication and quality checks.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="offering-card">
              <div className="offering-image-box">
                <img src={qualitycontrol} alt="Quality Control" className="offering-image" />
              </div>
              <div className="offering-content">
                <div className="offering-icon-title">
                  <FontAwesomeIcon icon={faAward} className="offering-icon" />
                  <h4>Rigorous Quality Checks</h4>
                </div>
                <p>Every piece is checked for load capacity, finishing quality, and moisture resistance, ensuring durability in indoor/outdoor use.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="offering-card">
              <div className="offering-image-box">
                <img src={packaging} alt="Secure Export Packaging" className="offering-image" />
              </div>
              <div className="offering-content">
                <div className="offering-icon-title">
                  <FontAwesomeIcon icon={faTruckLoading} className="offering-icon" />
                  <h4>Professional Export Packaging</h4>
                </div>
                <p>Safe and standardized packaging systems prevent any transit damage during long-distance domestic and international shipping.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Segments Grid */}
        <section className="partners-segments-section">
          <div className="partners-section-header">
            <span className="partners-badge">WHO WE WORK WITH</span>
            <h3 className="partners-subsection-title">Tailored for Every Industry</h3>
            <p className="partners-subsection-subtitle">We design solutions suited for diverse architectural and commercial spaces.</p>
          </div>

          <div className="segments-grid">
            <div className="segment-item">
              <div className="segment-icon-box">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
              <span className="segment-label">Boutique Cafes & Restaurants</span>
              <p className="segment-desc">Warm, aesthetic cane chairs and dining tables creating cozy atmospheres.</p>
            </div>
            
            <div className="segment-item">
              <div className="segment-icon-box">
                <FontAwesomeIcon icon={faHotel} />
              </div>
              <span className="segment-label">Luxury Eco Resorts & Hotels</span>
              <p className="segment-desc">Durable outdoor swing chairs and sofas blending with natural landscapes.</p>
            </div>

            <div className="segment-item">
              <div className="segment-icon-box">
                <FontAwesomeIcon icon={faStore} />
              </div>
              <span className="segment-label">Sustainable Furniture Retailers</span>
              <p className="segment-desc">Wholesale bulk supply of trending handicraft furniture at competitive prices.</p>
            </div>

            <div className="segment-item">
              <div className="segment-icon-box">
                <FontAwesomeIcon icon={faDraftingCompass} />
              </div>
              <span className="segment-label">Interior Designers & Architects</span>
              <p className="segment-desc">Collaborative engineering to execute custom residential and commercial blueprints.</p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits Checklist */}
        <section className="partnership-benefits-section">
          <div className="benefits-container">
            <div className="benefits-text-side">
              <span className="partners-badge">ADVANTAGES</span>
              <h3 className="benefits-title">Why Partner With Ecowoodies?</h3>
              <p className="benefits-desc">We combine artisanal heritage with structured corporate operations to deliver the best partner experience.</p>
              
              <div className="benefits-list">
                <div className="benefit-list-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check-icon" />
                  <span>Direct-from-manufacturer wholesale pricing.</span>
                </div>
                <div className="benefit-list-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check-icon" />
                  <span>Dedicated account manager for bulk orders.</span>
                </div>
                <div className="benefit-list-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check-icon" />
                  <span>Doorstep shipping coordination internationally.</span>
                </div>
                <div className="benefit-list-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="benefit-check-icon" />
                  <span>Complete raw material transparency (eco-certified cane).</span>
                </div>
              </div>
            </div>
            <div className="benefits-stats-side">
              <div className="stat-box">
                <span className="stat-number">2500+</span>
                <span className="stat-label">Artisans Supported</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">30+</span>
                <span className="stat-label">Countries Exported</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="partners-cta-section">
          <div className="partners-cta-card">
            <h3 className="cta-card-title">Become a Partner Today</h3>
            <p className="cta-card-desc">
              Whether you want to place a custom bulk order, launch an OEM line, or collaborate on a project, our team is ready to assist.
            </p>
            <div className="cta-btn-wrapper">
              <Link to="/contactus" className="partners-cta-btn">
                Inquire for Business
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Partners;