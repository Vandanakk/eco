import React from "react";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLeaf, faCheckCircle, faUsers, faCogs,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../component/Footer/footer";
import "./services.css";

// Images
import qualitycontrol from "../../images/qualitycontrol.jpg";
import customization from "../../images/customization.jpg";
import production from "../../images/production.jpg";
import designdevelopment from "../../images/designdevelopment.jpg";
import packaging from "../../images/packaging.jpg";
import oemodm from "../../images/oemodm.jpg";
import serviceshomepage from "../../images/serviceshomepage.jpg";

const Services = () => {
  const { t } = useTranslation(); 
  
  const servicesList = [
    {
      number: "01",
      title: "Manufacturing and Production",
      desc: "In our Production and Manufacturing section, we take pride in our specialization in bamboo product innovation and custom product development. With a legacy of 40 years in manufacturing furniture and handicrafts, we have established ourselves as experts in indoor and outdoor rattan, cane, sarkanda, and bamboo products. Our journey began by collaborating with local artisans, and today we are renowned for our customization capabilities. We are committed to sustainability, using waste and recyclable eco-friendly materials in our manufacturing process. Every product we create is not only beautifully crafted but also environmentally safe. Experience our exceptional production and manufacturing expertise as we bring your vision to life with the highest quality bamboo products.",
      img: production
    },
    {
      number: "02",
      title: "Customization",
      desc: "Our Customization Product process is the heart of our business. With decades of experience, we specialize in bamboo product innovation and custom development. Collaborating with local artisans, we have earned a renowned name in crafting indoor and outdoor furniture and handicrafts using rattan, cane, sarkanda, and bamboo. Our dedication to customization ensures that 80% of our portfolio is tailored to our clients' unique preferences. We take pride in our sustainable approach, using waste and recyclable materials to create environmentally safe products.",
      img: customization
    },
    {
      number: "03",
      title: "Quality Control",
      desc: "In our Quality Control section, we prioritize delivering flawless products by implementing rigorous testing and assurance measures at every stage of production. We understand the importance of ensuring that our customers receive the highest quality bamboo furniture and handicrafts. From the initial stages of material selection to the final inspection before packaging, our dedicated team conducts comprehensive quality checks to minimize defects and ensure exceptional craftsmanship. We employ advanced testing techniques and adhere to strict industry standards to guarantee that each item meets our stringent quality criteria. By incorporating a meticulous quality control process, we strive to provide you with products that are virtually defect-free, allowing you to enjoy the beauty and durability of our creations with complete confidence.",
      img: qualitycontrol
    },
    {
      number: "04",
      title: "Design and Development",
      desc: "In our Design and Development section, we bring decades of expertise in bamboo product innovation to create exceptional furniture and handicrafts. Our team of skilled artisans specializes in crafting indoor and outdoor products using rattan, cane, sarkanda, and bamboo. With a focus on customization, we collaborate closely with clients to deliver tailored solutions that reflect their unique style and preferences. By using waste and recyclable materials, we ensure our designs are not only visually stunning but also environmentally friendly.",
      img: designdevelopment
    },
    {
      number: "05",
      title: "Packaging and Shipping",
      desc: "In our Packaging and Export Delivery section, we take pride in ensuring the safe and secure transportation of our bamboo furniture and handicrafts. We have perfected our packaging techniques to protect our products during transit. We also prioritize sustainability by using eco-friendly packaging materials. Our efficient export delivery ensures timely and reliable shipments to our valued clients worldwide.",
      img: packaging
    },
    {
      number: "06",
      title: "OEM and ODM Services",
      desc: "In our OEM and ODM section, we offer exceptional opportunities for businesses seeking customized bamboo furniture and handicrafts. With our expertise in bamboo product innovation and experience, we collaborate with clients to bring their unique ideas to life. Our commitment to using eco-friendly materials ensures sustainable and environmentally conscious manufacturing. Partner with us for outstanding OEM and ODM solutions tailored to your specific requirements.",
      img: oemodm
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('SERVICES_HEADER') || "Our Services - Ecowoodies"}</title>
        <meta name="description" content={t('SERVICES_CONTENT') || "Specialized services including customization, manufacturing, design development, and quality control."} />
      </Helmet>

      <div className="services-page">
        {/* Background Decorative Patterns */}
        <div className="services-bg-patterns">
          {/* Blurred Glow Spheres */}
          <div className="bg-glow glow-1" />
          <div className="bg-glow glow-2" />
          <div className="bg-glow glow-3" />

          <div className="bg-pattern pattern-left-1">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-right-1">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-left-2">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
          <div className="bg-pattern pattern-right-2">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,95 Q48,60 52,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
              <path d="M52,10 Q65,0 72,15 Q65,25 51,18 Z" />
              <path d="M48,22 Q30,15 25,30 Q35,38 49,27 Z" />
              <path d="M52,35 Q75,30 80,45 Q70,55 53,42 Z" />
              <path d="M48,48 Q25,45 20,60 Q32,68 49,54 Z" />
              <path d="M52,62 Q80,62 82,77 Q70,85 53,68 Z" />
              <path d="M48,75 Q28,75 25,90 Q38,95 49,80 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <section className="services-hero">
          <img src={serviceshomepage} alt="Ecowoodies Services Banner" className="services-hero-bg" />
          <div className="services-hero-overlay" />
          <div className="services-hero-container">
            <div className="services-hero-content">
              <span className="section-badge">OUR SERVICES</span>
              <h1 className="hero-title">Expertise. Quality.<br />Sustainability.</h1>
              <p className="hero-desc">
                From craftsmanship to customization, every service we offer reflects our commitment to quality, innovation, and sustainability.
              </p>
            </div>
          </div>
          {/* Organic Wave Transition */}
          <div className="hero-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,32 C240,70 480,90 720,70 C960,50 1200,70 1440,32 L1440,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* Services List Section */}
        <section className="services-list-section">
          <div className="services-cards-container">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.number} className={`service-row-card ${isEven ? "layout-normal" : "layout-reverse"}`}>
                  <div className="service-card-text">
                    <div className="service-title-row">
                      <span className="service-number-circle">{service.number}</span>
                      <h3 className="service-title-text">{service.title}</h3>
                    </div>
                    <p className="service-desc-text">{service.desc}</p>
                  </div>
                  <div className="service-card-image">
                    <img src={service.img} alt={service.title} className="service-img" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Highlights Row */}
        <section className="services-bottom-badges">
          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faLeaf} /></span>
            <div className="badge-card-text">
              <h6>Sustainable Materials</h6>
              <p>Eco-friendly & responsibly sourced</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faCheckCircle} /></span>
            <div className="badge-card-text">
              <h6>Quality Assured</h6>
              <p>Every product is quality certified</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faUsers} /></span>
            <div className="badge-card-text">
              <h6>Skilled Artisans</h6>
              <p>40+ years of craft expertise</p>
            </div>
          </div>

          <div className="badge-card-item">
            <span className="badge-card-icon"><FontAwesomeIcon icon={faCogs} /></span>
            <div className="badge-card-text">
              <h6>Custom Solutions</h6>
              <p>Tailored to your unique needs</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Services;