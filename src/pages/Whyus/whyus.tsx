import { Link } from "react-router-dom";
import "./whyus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSeedling, faRecycle, faTree, faSync, faQuoteLeft, faGlobe, faUserShield, faHandshake } from "@fortawesome/free-solid-svg-icons";

import craftsmanship from "../../images/craftsmanship.jpg"
import ecofriendly from "../../images/ecofriendly.jpg"
import whoweare from "../../images/whoweare.jpg"
import ourstroy from "../../images/ourstroy.jpg"

import Footer from "../../component/Footer/footer";
import MyTeams from "../Myteams/myteams";
import whymainpage from "../../images/whymainpage.jpg"
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Whyus = () => {
  const { t } = useTranslation(); 
  return (
    <>
      <Helmet>
        <title>{t('WHYUS_HEADER')}</title>
        <meta name="description" content={t('WHYUS_CONTENT')} />
      </Helmet>
      
      <div className="why-us-page-wrapper">
        {/* Top Hero Section */}
        <section className="why-us-hero-section">
          <div className="why-us-hero-content-card">
            <span className="why-us-badge">WHY ECOWOODIES</span>
            <h1 className="why-us-hero-title">Crafted by Nature.<br/><span className="title-accent">Inspired by People.</span></h1>
            <div className="why-us-title-line"></div>
            <p className="why-us-hero-para">
              Bringing the authentic beauty of sustainable bamboo and cane to homes worldwide with over 40 years of heritage, passion, and artistic design.
            </p>
          </div>
          <div className="why-us-hero-image-frame">
            <img className="why-us-hero-image" src={whymainpage} alt="Why Choose Ecowoodies" />
            <div className="why-us-image-experience-tag">
              <span className="exp-number">40+</span>
              <span className="exp-text">Years of<br/>Craftsmanship</span>
            </div>
          </div>
        </section>

        {/* Brand Values Highlights */}
        <section className="brand-values-highlights">
          <div className="value-card">
            <div className="value-icon-box">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h4 className="value-title">100% Sustainable</h4>
            <p className="value-desc">Every piece is hand-selected and crafted from renewable natural materials.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-box">
              <FontAwesomeIcon icon={faUserShield} />
            </div>
            <h4 className="value-title">Certified Artisans</h4>
            <p className="value-desc">Empowering local rural artisans, preserving heritage Indian crafts.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-box">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h4 className="value-title">Global Presence</h4>
            <p className="value-desc">Custom-made creations proudly exported to international customers.</p>
          </div>
        </section>

        {/* Who We Are & Our Story Section */}
        <section className="why-us-two-col-section">
          <div className="why-us-col-card">
            <div className="why-us-card-header">
              <div className="why-us-card-icon-circle">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h2 className="why-us-card-title">Who We Are</h2>
            </div>
            <div className="why-us-card-text">
              <p>
                <span className="drop-cap">A</span>t Ecowoodies, we are proud to be specialists in the innovation and development of bamboo products. With over 40 years of experience, we have honed our skills in manufacturing furniture and handicrafts using various materials such as indoor/outdoor rattan, cane, sarkanda, and bamboo.
              </p>
              <p>
                Our journey began with a vision to incorporate the talents of local artisans from villages, fostering a sense of community and collaboration. Today, we are renowned for our expertise in customizing products according to our clients' unique preferences and requirements. In fact, 80% of our portfolio consists of tailor-made creations, showcasing our dedication to personalized craftsmanship.
              </p>
              <p>
                One of our core principles is a commitment to sustainability and environmental responsibility. We prioritize using waste and recyclable materials in our manufacturing process, ensuring that our products are not only beautifully designed but also eco-friendly and safe for the environment.
              </p>
            </div>
            <Link to="/contactus" className="why-us-card-link">Learn more about us &rarr;</Link>
          </div>

          <div className="why-us-col-card">
            <div className="why-us-card-header">
              <div className="why-us-card-icon-circle">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h2 className="why-us-card-title">Our Story</h2>
            </div>
            <div className="why-us-card-text">
              <p>
                <span className="drop-cap">O</span>ur family has been deeply rooted in the rattan and cane furniture business. This passion for crafting exquisite furniture has been passed down through generations, as our ancestors established a legacy in this industry. Initially, our focus was on selling our products locally through trusted agents, serving our community with quality and durable furniture.
              </p>
              <p>
                However, with the advancement of technology and changing market dynamics, we recognized the need to expand our reach. Ten years ago, we embarked on a new chapter in our journey by embracing the digital era and venturing into online sales. This allowed us to connect with customers beyond geographical boundaries and showcase our craftsmanship to a wider audience.
              </p>
              <p>
                With the digital platform opening up global opportunities, we took the bold step of exporting our products overseas. This decision has not only expanded our business horizons but has also enabled us to share the beauty of rattan and cane furniture with customers from different countries. We take immense pride in our heritage and are thrilled to see our designs finding homes across the world.
              </p>
            </div>
            <Link to="/contactus" className="why-us-card-link">Read full story &rarr;</Link>
          </div>
        </section>

        {/* Our Craftsmanship Section */}
        <section className="why-us-craftsmanship-section">
          <div className="why-us-craftsmanship-content">
            <div className="why-us-card-header">
              <div className="why-us-card-icon-circle">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h2 className="why-us-card-title">Our Craftsmanship</h2>
            </div>
            <div className="why-us-card-text">
              <p>
                Ecowoodies is a digitized platform for a part of the world's most prepared and most complex specialty structures. In order to preserve, showcase and share the talent of India’s artisans with the world, we work to elevate the pride of Indian experts and energize interest in an amazing tradition of crafts that crosses centuries.
              </p>
              <p>
                With a legacy of craft that spans millennia, the fantastic world of India’s craftspeople remains unsurpassed in its beauty and extent. Artisans weave dreams, legends, and regular experiences into different shapes, maintaining their cultural consistency over generations to enrich their livelihoods.
              </p>
            </div>
            
            <div className="why-us-highlight-block">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p className="why-us-highlight-quote">
                "We believe that with beautiful products and fair wages, a wonderful world is possible."
              </p>
            </div>

            <div className="why-us-card-text">
              <p>
                Throughout the years, we have developed associations with more than 2,500 artisans directly and through our regional partners. Our primary mission is to empower the Indian artisan and support communities that are traditionally left behind.
              </p>
            </div>
          </div>

          <div className="why-us-craftsmanship-gallery">
            <div className="gallery-top-image-container">
              <img className="gallery-top-image" src={craftsmanship} alt="Our Craftsmanship" />
              <div className="gallery-image-overlay-text">Artisans at Work</div>
            </div>
            <div className="gallery-bottom-row">
              <div className="gallery-sub-image-container">
                <img className="gallery-sub-image" src={whoweare} alt="Who We Are" />
              </div>
              <div className="gallery-sub-image-container">
                <img className="gallery-sub-image" src={ourstroy} alt="Our Story" />
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Decisions Section */}
        <section className="why-us-environmental-section">
          <div className="why-us-environmental-image-container">
            <img className="why-us-environmental-image" src={ecofriendly} alt="Eco Friendly Decisions" />
            <div className="eco-badge-seal">100% Organic</div>
          </div>
          
          <div className="why-us-environmental-content">
            <div className="why-us-card-header">
              <div className="why-us-card-icon-circle">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h2 className="why-us-card-title">Environmentally Conscious Decisions</h2>
            </div>
            <div className="why-us-card-text">
              <p>
                At the core of our business philosophy is the utilization of waste and recyclable materials in our manufacturing process. We transform discarded resources that would otherwise have no purpose, breathing new life into them.
              </p>
              <p>
                Our sourcing practices reflect our commitment to environmental consciousness. We carefully select raw materials that align with our sustainability goals, reducing the demand for new resources and minimizing our ecological footprint.
              </p>
              <p>
                Each piece of furniture we create is a testament to our dedication to craftsmanship and environmental stewardship. Our skilled artisans blend their expertise with the natural qualities of rattan and cane to craft stunning, durable, and comfortable pieces.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="why-us-badges-grid">
              <div className="why-us-badge-item-card">
                <div className="why-us-badge-icon-box">
                  <FontAwesomeIcon icon={faSeedling} />
                </div>
                <div className="badge-item-info">
                  <span className="why-us-badge-label">Sustainable Materials</span>
                  <p className="why-us-badge-desc">Cane & bamboo harvested responsibly.</p>
                </div>
              </div>
              
              <div className="why-us-badge-item-card">
                <div className="why-us-badge-icon-box">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
                <div className="badge-item-info">
                  <span className="why-us-badge-label">Eco-friendly Production</span>
                  <p className="why-us-badge-desc">Zero chemical wastes in processing.</p>
                </div>
              </div>

              <div className="why-us-badge-item-card">
                <div className="why-us-badge-icon-box">
                  <FontAwesomeIcon icon={faSync} />
                </div>
                <div className="badge-item-info">
                  <span className="why-us-badge-label">Waste Reduction</span>
                  <p className="why-us-badge-desc">Upcycling raw material offcuts.</p>
                </div>
              </div>

              <div className="why-us-badge-item-card">
                <div className="why-us-badge-icon-box">
                  <FontAwesomeIcon icon={faTree} />
                </div>
                <div className="badge-item-info">
                  <span className="why-us-badge-label">Lower Carbon Footprint</span>
                  <p className="why-us-badge-desc">Localized craftsmanship networks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <div className="team-section-divider"></div>
        <MyTeams/>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Whyus;