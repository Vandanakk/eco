import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, faLeaf, faSync, faCheckCircle, 
  faChevronRight, faGlobe, faTree, faBoxOpen, 
  faHeart, faHandshake, faCheckSquare, faLock,
  faShippingFast, faStar
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../component/Footer/footer";
import "./csr.css";

// Images from assets
import ourpartners from "../../images/ourpartners.jpg";
import craftsmanship from "../../images/craftsmanship.jpg";
import ecofriendly from "../../images/ecofriendly.jpg";
import whoweare from "../../images/whoweare.jpg";
import production from "../../images/production.jpg";
import ourstory from "../../images/ourstroy.jpg";
import serviceshomepage from "../../images/serviceshomepage.jpg";

export default function Csr() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>CSR & Our Commitment - Ecowoodies</title>
        <meta name="description" content="Discover our Corporate Social Responsibility, community empowerment, and environmental sustainability initiatives." />
      </Helmet>

      <div className="csr-page">
        {/* Hero Section */}
        <section className="csr-hero">
          <div className="csr-hero-content">
            <span className="section-badge">OUR COMMITMENT</span>
            <h1 className="hero-title">Crafting Impact.<br />Empowering Communities.</h1>
            <p className="hero-desc">
              At Ecowoodies, we believe business growth and community well-being go hand in hand. Through responsible practices and meaningful partnerships, we strive to create a positive impact on people and the planet.
            </p>
          </div>

          <div className="csr-hero-image-wrapper">
            <div className="csr-hero-card">
              <img src={ourpartners} alt="Artisans collaborating" className="csr-hero-img" />
              
              <div className="highlights-box">
                <div className="highlights-header">
                  <span className="highlights-icon"><FontAwesomeIcon icon={faLeaf} /></span>
                  <h5>HIGHLIGHTS</h5>
                </div>
                <ul className="highlights-list">
                  <li>Supporting traditional rural communities</li>
                  <li>Promoting sustainable and ethical production</li>
                  <li>Using renewable and recyclable materials</li>
                  <li>Building long-term community partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="focus-areas-section">
          <div className="section-header text-center">
            <span className="subtitle-badge">OUR FOCUS AREAS</span>
          </div>

          <div className="focus-areas-grid">
            <div className="focus-card">
              <div className="focus-header">
                <span className="focus-icon"><FontAwesomeIcon icon={faUsers} /></span>
                <h4>Empowering People</h4>
              </div>
              <p className="focus-desc">Creating fair employment opportunities and artisan skills development.</p>
              <div className="focus-img-box">
                <img src={craftsmanship} alt="Empowering People" />
              </div>
            </div>

            <div className="focus-card">
              <div className="focus-header">
                <span className="focus-icon"><FontAwesomeIcon icon={faLeaf} /></span>
                <h4>Sustainable Materials</h4>
              </div>
              <p className="focus-desc">We use rattan, seagrass, water hyacinth, and wood from renewable sources.</p>
              <div className="focus-img-box">
                <img src={ecofriendly} alt="Sustainable Materials" />
              </div>
            </div>

            <div className="focus-card">
              <div className="focus-header">
                <span className="focus-icon"><FontAwesomeIcon icon={faHeart} /></span>
                <h4>Community Well-being</h4>
              </div>
              <p className="focus-desc">Investing in education, health, and basic needs for stronger communities.</p>
              <div className="focus-img-box">
                <img src={whoweare} alt="Community Well-being" />
              </div>
            </div>

            <div className="focus-card">
              <div className="focus-header">
                <span className="focus-icon"><FontAwesomeIcon icon={faSync} /></span>
                <h4>Responsible Production</h4>
              </div>
              <p className="focus-desc">Minimizing waste and reducing our environmental footprint at every step.</p>
              <div className="focus-img-box">
                <img src={production} alt="Responsible Production" />
              </div>
            </div>

            <div className="focus-card">
              <div className="focus-header">
                <span className="focus-icon"><FontAwesomeIcon icon={faHandshake} /></span>
                <h4>Long-term Partnerships</h4>
              </div>
              <p className="focus-desc">Building trust and growth through transparent and ethical collaborations.</p>
              <div className="focus-img-box">
                <img src={ourstory} alt="Long-term Partnerships" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="our-impact-section">
          <div className="section-header text-center">
            <span className="subtitle-badge">OUR IMPACT</span>
          </div>

          <div className="impact-stats-grid">
            <div className="stat-item">
              <span className="stat-icon"><FontAwesomeIcon icon={faUsers} /></span>
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Artisans & Families Empowered</p>
            </div>

            <div className="stat-item">
              <span className="stat-icon"><FontAwesomeIcon icon={faBoxOpen} /></span>
              <h3 className="stat-number">50,000+</h3>
              <p className="stat-label">Handmade Products Created Annually</p>
            </div>

            <div className="stat-item">
              <span className="stat-icon"><FontAwesomeIcon icon={faLeaf} /></span>
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Renewable & Natural Materials Used</p>
            </div>

            <div className="stat-item">
              <span className="stat-icon"><FontAwesomeIcon icon={faGlobe} /></span>
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Countries We Export To</p>
            </div>

            <div className="stat-item">
              <span className="stat-icon"><FontAwesomeIcon icon={faTree} /></span>
              <h3 className="stat-number">1,000+</h3>
              <p className="stat-label">Trees Planted (And Counting)</p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="our-approach-section">
          <div className="approach-left">
            <span className="section-badge">OUR APPROACH</span>
            <h2 className="approach-title">Sustainable Choices.<br />Meaningful Impact.</h2>
            <p className="approach-desc">
              From supporting artisans to choosing eco-friendly materials, every decision we make is guided by our commitment to sustainability and community.
            </p>

            <ul className="approach-checklist">
              <li>
                <span className="check-icon"><FontAwesomeIcon icon={faCheckSquare} /></span>
                <span>Ethical sourcing and fair wages</span>
              </li>
              <li>
                <span className="check-icon"><FontAwesomeIcon icon={faCheckSquare} /></span>
                <span>Skill development and empowerment</span>
              </li>
              <li>
                <span className="check-icon"><FontAwesomeIcon icon={faCheckSquare} /></span>
                <span>Eco-friendly production and packaging</span>
              </li>
              <li>
                <span className="check-icon"><FontAwesomeIcon icon={faCheckSquare} /></span>
                <span>Transparent and long-term collaborations</span>
              </li>
            </ul>

            <Link to="/whyus" className="learn-more-btn">
              Learn More About Us <FontAwesomeIcon icon={faChevronRight} className="btn-arrow" />
            </Link>
          </div>

          <div className="approach-right">
            <div className="collage-container">
              <div className="collage-grid">
                <img src={whoweare} alt="Artisan 1" className="collage-img img-1" />
                <img src={ourstory} alt="Artisan 2" className="collage-img img-2" />
                <img src={craftsmanship} alt="Artisan 3" className="collage-img img-3" />
                <img src={ecofriendly} alt="Artisan 4" className="collage-img img-4" />
              </div>
              <div className="collage-center-badge">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner Section */}
        <section className="csr-cta-banner">
          <div className="csr-cta-card">
            <div className="csr-cta-text">
              <span className="cta-icon"><FontAwesomeIcon icon={faLeaf} /></span>
              <h2>Together, Let's Build a Better Tomorrow</h2>
              <p>We are committed to leaving a positive world for future generations through sustainable choices and meaningful impact.</p>
              <Link to="/contactus" className="cta-partner-btn">
                Partner With Us <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
            <div className="csr-cta-image">
              <img src={serviceshomepage} alt="River and nature scenery" />
            </div>
          </div>
        </section>

        {/* Bottom Banner Row */}
        <section className="csr-bottom-banner">
          <div className="banner-badge-item">
            <span className="banner-badge-icon"><FontAwesomeIcon icon={faLeaf} /></span>
            <div className="banner-badge-text">
              <h6>Eco-friendly Materials</h6>
              <p>Sustainability sourced</p>
            </div>
          </div>

          <div className="banner-badge-item">
            <span className="banner-badge-icon"><FontAwesomeIcon icon={faStar} /></span>
            <div className="banner-badge-text">
              <h6>Premium Quality</h6>
              <p>Built to last</p>
            </div>
          </div>

          <div className="banner-badge-item">
            <span className="banner-badge-icon"><FontAwesomeIcon icon={faShippingFast} /></span>
            <div className="banner-badge-text">
              <h6>Worldwide Delivery</h6>
              <p>Fast & reliable</p>
            </div>
          </div>

          <div className="banner-badge-item">
            <span className="banner-badge-icon"><FontAwesomeIcon icon={faLock} /></span>
            <div className="banner-badge-text">
              <h6>Secure Payments</h6>
              <p>Safe & trusted</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
