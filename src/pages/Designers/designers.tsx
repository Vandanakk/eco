import { Link } from "react-router-dom";
import "./designers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faQuoteLeft, faPalette, faAward, faEye } from "@fortawesome/free-solid-svg-icons";

import designersmainpage from "../../images/designers11.jpeg";
import designermona from "../../images/desingermona.jpeg";

import babydollStroller from "../../images/babydollStroller.jpg";
import babydollCrib1 from "../../images/babydollCrib1.jpg";
import hangingChair from "../../images/hangingChair.jpg";

import bambooCaneSofa from "../../images/bambooCaneSofa.jpg";
import mudhaSet1 from "../../images/mudhaSet1.jpg";
import lamp1 from "../../images/lamp1.jpg";

import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Footer from "../../component/Footer/footer";

const Designers = () => {
  const { t } = useTranslation(); 
  return (
    <>
      <Helmet>
        <title>{t('DESIGNER_HEADER')}</title>
        <meta name="description" content={t('DESIGNER_CONTENT')} />
      </Helmet>
      
      <div className="designers-page-wrapper">
        {/* Header Section */}
        <div className="designers-page-header-container">
          <span className="designers-badge">THE CREATIVE MINDS</span>
          <h1 className="designers-page-title">Creativity. Expertise.<br/><span className="title-accent">Crafted to Inspire.</span></h1>
          <div className="designers-subheader-line"></div>
          <div className="designers-page-description-box">
            <p className="description-lead">
              Our team of professional furniture designers brings a wealth of global creativity and technical expertise to Ecowoodies. They are instrumental in forging innovative design blueprints for our wooden, bamboo, and rattan products.
            </p>
            <p className="description-detail">
              With a keen eye for detail and a passion for craftsmanship, our designers excel in creating unique and aesthetically pleasing furniture pieces. From bamboo chairs and tables to newborn photography props, swing chairs, and garden chairs, their designs cater to diverse needs and preferences worldwide.
            </p>
          </div>
        </div>

        {/* Designer Profile 1 (Viren K) */}
        <div className="designer-profile-card">
          <div className="designer-main-visual">
            <div className="designer-image-container">
              <img className="designer-profile-image" src={designersmainpage} alt="Viren K" />
            </div>
            <div className="designer-featured-badge">
              <FontAwesomeIcon icon={faAward} /> Master Innovator
            </div>
          </div>
          
          <div className="designer-details-container">
            <div className="designer-header-row">
              <div className="designer-icon-circle">
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <div className="designer-name-sub">
                <h2 className="designer-name">Viren K</h2>
                <span className="designer-role">SENIOR DESIGNER</span>
              </div>
            </div>

            <div className="designer-quote-block">
              <FontAwesomeIcon icon={faQuoteLeft} className="designer-quote-icon" />
              <p className="designer-quote">
                "Design is not just what it looks like and feels like. Design is how it works, combined with deep cultural roots and respect for nature."
              </p>
            </div>

            <div className="designer-bio-text">
              <p>
                Introducing Viren, our esteemed designer who brings a wealth of expertise to the realm of furniture manufacturing. With a Bachelor and Master's degree in Fine Arts, a postgraduate degree in Law, a diploma in Naturopathy & Yoga Science, and a Diploma in Cinematography & Film making, Viren's diverse educational background lends a multidimensional perspective to his work.
              </p>
              <p>
                Passionate about fostering global cultural relations, Viren approaches the world with love, compassion, and forgiveness. His portfolio showcases his exceptional talent in designing art, architecture, cultural, and educational projects. Additionally, Viren is an accomplished author.
              </p>
              <p>
                Beyond his creative pursuits, Viren is deeply committed to youth empowerment and environmental conservation. He actively engages in a transformative project in Ladakh Himalaya.
              </p>
            </div>

            {/* Featured Designs Showcase */}
            <div className="featured-showcase-container">
              <h4 className="showcase-title">Featured Collections by Viren</h4>
              <div className="showcase-gallery-grid">
                <div className="showcase-item">
                  <img src={babydollStroller} alt="Stroller" className="showcase-img" />
                  <span className="showcase-label">Artisanal Strollers</span>
                </div>
                <div className="showcase-item">
                  <img src={babydollCrib1} alt="Crib" className="showcase-img" />
                  <span className="showcase-label">Bamboo Cribs</span>
                </div>
                <div className="showcase-item">
                  <img src={hangingChair} alt="Hanging Chair" className="showcase-img" />
                  <span className="showcase-label">Swing Chairs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Designer Profile 2 (Monika) */}
        <div className="designer-profile-card card-reversed">
          <div className="designer-details-container">
            <div className="designer-header-row">
              <div className="designer-icon-circle">
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <div className="designer-name-sub">
                <h2 className="designer-name">Monika</h2>
                <span className="designer-role">LEAD PRODUCT DESIGNER</span>
              </div>
            </div>

            <div className="designer-quote-block">
              <FontAwesomeIcon icon={faQuoteLeft} className="designer-quote-icon" />
              <p className="designer-quote">
                "Aesthetics must be balanced with ergonomics. Eco-friendly materials like bamboo offer endless possibilities for sculpture and functionality."
              </p>
            </div>

            <div className="designer-bio-text">
              <p>
                Monika is a highly skilled and accomplished furniture designer with a passion for innovation and creativity. With over a decade of experience in the industry, she brings a unique blend of artistic vision and functional expertise to her work. Monika holds a Bachelor's degree in Fine Arts with a specialization in Applied Art, as well as a Master's degree in Fine Arts with a focus on graphics designing. She is currently pursuing her PhD in Applied Arts from Delhi University.
              </p>
              <p>
                Monika's impressive portfolio includes working on prestigious projects such as the Namami Gange project for Doordarshan and serving as an art director for lantern designing for the Korean embassy. Monika has conducted workshops for the Center for Cultural Resources and Training (CCRT) and has been a freelance columnist for Art Times Newspaper. Additionally, she has showcased her artwork in numerous exhibitions and workshops across the country.
              </p>
            </div>

            {/* Featured Designs Showcase */}
            <div className="featured-showcase-container">
              <h4 className="showcase-title">Featured Collections by Monika</h4>
              <div className="showcase-gallery-grid">
                <div className="showcase-item">
                  <img src={bambooCaneSofa} alt="Cane Sofa" className="showcase-img" />
                  <span className="showcase-label">Cane Sofa Sets</span>
                </div>
                <div className="showcase-item">
                  <img src={mudhaSet1} alt="Mudha Set" className="showcase-img" />
                  <span className="showcase-label">Mudha Stools</span>
                </div>
                <div className="showcase-item">
                  <img src={lamp1} alt="Lamp" className="showcase-img" />
                  <span className="showcase-label">Woven Lamps</span>
                </div>
              </div>
            </div>
          </div>

          <div className="designer-main-visual">
            <div className="designer-image-container">
              <img className="designer-profile-image" src={designermona} alt="Monika" />
            </div>
            <div className="designer-featured-badge">
              <FontAwesomeIcon icon={faAward} /> Research Scholar
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Designers;