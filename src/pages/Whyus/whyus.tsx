import { Link } from "react-router-dom";
import "./whyus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSeedling, faRecycle, faTree, faSync } from "@fortawesome/free-solid-svg-icons";

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
      
      <div className="why-us-page">
        {/* Top Hero Section */}
        <section className="why-us-hero-section">
          <div className="why-us-hero-content">
            <span className="why-us-subheader">WHY CHOOSE ECOWOODIES</span>
            <div className="why-us-subheader-line"></div>
            <h1 className="why-us-hero-title">Crafted by Nature.<br/>Inspired by People.</h1>
            <p className="why-us-hero-para">
              Bringing the beauty of bamboo and cane to homes across the world with purpose and passion.
            </p>
            <div className="why-us-subheader-line"></div>
          </div>
          <div className="why-us-hero-image-container">
            <img className="why-us-hero-image" src={whymainpage} alt="Why Choose Ecowoodies" />
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
              At Ecowoodies, we are proud to be specialists in the innovation and development of bamboo products. With over 40 years of experience, we have honed our skills in manufacturing furniture and handicrafts using various materials such as indoor/outdoor rattan, cane, sarkanda, and bamboo.
              <br/><br/>
              Our journey began with a vision to incorporate the talents of local artisans from villages, fostering a sense of community and collaboration. Today, we are renowned for our expertise in customizing products according to our clients' unique preferences and requirements. In fact, 80% of our portfolio consists of tailor-made creations, showcasing our dedication to personalized craftsmanship.
              <br/><br/>
              One of our core principles is a commitment to sustainability and environmental responsibility. We prioritize using waste and recyclable materials in our manufacturing process, ensuring that our products are not only beautifully designed but also eco-friendly and safe for the environment.
              <br/><br/>
              Through our dedication to quality, innovation, and sustainable practices, we have earned a reputation as a trusted provider of custom-made furniture and handicrafts. We take pride in our ability to transform ideas into tangible creations that reflect the individuality and style of our clients.
              <br/><br/>
              As we continue on our journey, we remain steadfast in our mission to deliver exceptional craftsmanship, foster local talent, and contribute to a greener future. Join us in exploring the world of bespoke bamboo products and discover the beauty of sustainable living.
            </div>
            <Link to="/about" className="why-us-card-link">Learn more about us &rarr;</Link>
          </div>

          <div className="why-us-col-card">
            <div className="why-us-card-header">
              <div className="why-us-card-icon-circle">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h2 className="why-us-card-title">Our Story</h2>
            </div>
            <div className="why-us-card-text">
              Our family has been deeply rooted in the rattan and cane furniture business. This passion for crafting exquisite furniture has been passed down through generations, as our ancestors established a legacy in this industry. Initially, our focus was on selling our products locally through trusted agents, serving our community with quality and durable furniture.
              <br/><br/>
              However, with the advancement of technology and changing market dynamics, we recognized the need to expand our reach. Ten years ago, we embarked on a new chapter in our journey by embracing the digital era and venturing into online sales. This allowed us to connect with customers beyond geographical boundaries and showcase our craftsmanship to a wider audience.With the digital platform opening up global opportunities, we took the bold step of exporting our products overseas. This decision has not only expanded our business horizons but has also enabled us to share the beauty of rattan and cane furniture with customers from different countries. We take immense pride in our heritage and are thrilled to see our designs finding homes across the world.
              <br/><br/>
              As we continue to write the story of our family business, we are grateful for the trust and support of our customers who have journeyed with us. We look forward to sharing more timeless creations and providing exceptional service as we build a bridge between our rich legacy and the exciting future of the rattan and cane furniture industry.
            </div>
            <Link to="/about" className="why-us-card-link">Read full story &rarr;</Link>
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
              Ecowoodies is a mechanized stage for a part of the world's most prepared and most puzzling specialty structures. In order to preserve, showcase and share the talent of India’s artisans with the world. We want to have the choice to raise the pride of the Indian expert in our own specific way and energize an interest and support for an amazing practice of specialty that crosses hundreds of years and spreads across the length and breadth of the land. It is our work to coordinate a clearly remarkable assurance of regular workmanship and craftsmanship changed over into an extent of wonderful, contemporary things.
              <br/><br/>
              With a legacy of craft that spans millennia and some of the forms dating as far back as to the era of the Indus Valley civilisation, the fantastic world of India’s crafts people remains unsurpassed in its beauty and extent. "Craftsmanship in India turns out effectively for endless uneducated people weave dreams, legends and fundamental regular experiences into different sorts of creative mind that can change shape over time one day to another, yet stay aware of their consistency for a seriously prolonged stretch of time to upgrade their lives. There are many worlds held inside the geographical limits of India. The world of its craftspeople, with their hand made product and materials, ranges hundreds of years and spreads across the length and breadth of the land. To hundreds and thousands of Indian craftsmen, blend of utility and style gets handed out with practically no issues… "
            </div>
            
            <div className="why-us-highlight-block">
              <p className="why-us-highlight-quote">
                "We believe that with beautiful products and fair wages, a wonderful world is possible"
              </p>
            </div>

            <div className="why-us-card-text">
              Throughout the long term, we have developed associations with more than 2500 craftsmans straightforwardly and through our partners. Our essential mission is to enable the Indian craftsman and lift up a local area of individuals who are commonly abandoned. By deciding to straightforwardly uphold craftsmans, make based associations and social causes, we assist with encouraging a pattern of interest that sustains trust, trust and long haul relationships.
            </div>
          </div>

          <div className="why-us-craftsmanship-gallery">
            <div className="gallery-top-image-container">
              <img className="gallery-top-image" src={craftsmanship} alt="Our Craftsmanship" />
            </div>
            <div className="gallery-bottom-row">
              <img className="gallery-sub-image" src={whoweare} alt="Who We Are" />
              <img className="gallery-sub-image" src={ourstroy} alt="Our Story" />
            </div>
          </div>
        </section>

        {/* Environmental Decisions Section */}
        <section className="why-us-environmental-section">
          <div className="why-us-environmental-image-container">
            <img className="why-us-environmental-image" src={ecofriendly} alt="Eco Friendly Decisions" />
          </div>
          
          <div className="why-us-environmental-content">
            <div className="why-us-card-header">
              <div className="why-us-card-icon-circle">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h2 className="why-us-card-title">Encouraging Environmentally Conscious Decisions</h2>
            </div>
            <div className="why-us-card-text">
              Making mindfulness for cradle is inseparably connected with advancing natural decisions with a couple of exemptions. The Indian artworks expert is maybe the best moderate who endeavors to live as one with his current circumstance. While, we give a valiant effort to elevate eco-accommodating decisions to the most ideal degree, there are a couple of exemptions where helping livelihoods might come first, essentially because of our obligation to assist each art with framing and each kind of craftsman from our hinterlands.
              <br/><br/>
              At the core of our business philosophy is the utilization of waste and recyclable materials in our manufacturing process. We transform discarded materials that would otherwise have no purpose, breathing new life into them. By upcycling these materials, we not only create exquisite furniture but also contribute to a healthier planet.
              <br/><br/>
              Our sourcing practices reflect our commitment to environmental consciousness. We carefully select raw materials that align with our sustainability goals. By using waste materials as the foundation for our products, we reduce the demand for new resources and minimize our ecological impact.
              <br/><br/>
              In addition to utilizing eco-friendly materials, we adhere to stringent manufacturing practices that prioritize sustainability. Our state-of-the-art machinery and production processes are designed to minimize waste, conserve energy, and reduce carbon emissions. We believe that by embracing sustainable practices, we can create beautiful furniture without compromising the well-being of our planet.
              <br/><br/>
              Each piece of furniture we create is a testament to our dedication to craftsmanship and environmental stewardship. Our skilled artisans blend their expertise with the natural qualities of rattan and cane to craft stunning, durable, and comfortable pieces.
            </div>

            {/* Badges Grid */}
            <div className="why-us-badges-grid">
              <div className="why-us-badge-item">
                <div className="why-us-badge-icon">
                  <FontAwesomeIcon icon={faSeedling} />
                </div>
                <span className="why-us-badge-label">Sustainable Materials</span>
              </div>
              
              <div className="why-us-badge-item">
                <div className="why-us-badge-icon">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
                <span className="why-us-badge-label">Eco-friendly Production</span>
              </div>

              <div className="why-us-badge-item">
                <div className="why-us-badge-icon">
                  <FontAwesomeIcon icon={faSync} />
                </div>
                <span className="why-us-badge-label">Waste Reduction</span>
              </div>

              <div className="why-us-badge-item">
                <div className="why-us-badge-icon">
                  <FontAwesomeIcon icon={faTree} />
                </div>
                <span className="why-us-badge-label">Lower Carbon Footprint</span>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <MyTeams/>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Whyus;