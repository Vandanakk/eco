import React from 'react'
import Form from './Form'
import Info from './Info'
import Footer from "../../component/Footer/footer";
import Addresses from './Addresses';
import Disclaimer from '../Disclaimer/disclaimer';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import './contact-section.css'


const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('CONTACT_HEADER')}</title>
        <meta name="description" content={t('CONTACT_CONTENT')} />
      </Helmet>
      
      <div className="contact-page-wrapper">
        <div className="contact-page-header-container">
          {/* Top-Left Leaf SVG */}
          <svg className="contact-decor-leaf contact-decor-tl" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,-10 Q40,25 90,80" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M15,10 C5,20 12,32 25,25 C38,18 30,5 15,10 Z" fill="#8cb978" opacity="0.75" />
            <path d="M35,28 C25,38 32,50 45,43 C58,36 50,23 35,28 Z" fill="#9bc388" opacity="0.8" />
            <path d="M55,48 C45,58 52,70 65,63 C78,56 70,43 55,48 Z" fill="#8cb978" opacity="0.75" />
            <path d="M22,12 C35,2 45,10 38,20 C31,30 18,22 22,12 Z" fill="#b0d59e" opacity="0.7" />
            <path d="M42,30 C55,20 65,28 58,38 C51,48 38,40 42,30 Z" fill="#9bc388" opacity="0.8" />
          </svg>

          {/* Top-Right Leaf SVG */}
          <svg className="contact-decor-leaf contact-decor-tr" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M130,-10 Q80,30 30,90" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M105,15 C95,5 82,12 88,25 C94,38 110,30 105,15 Z" fill="#8cb978" opacity="0.75" />
            <path d="M85,35 C75,25 62,32 68,45 C74,58 90,50 85,35 Z" fill="#9bc388" opacity="0.8" />
            <path d="M98,22 C108,32 102,45 90,40 C78,35 88,20 98,22 Z" fill="#b0d59e" opacity="0.7" />
            <path d="M78,42 C88,52 82,65 70,60 C58,55 68,40 78,42 Z" fill="#8cb978" opacity="0.75" />
          </svg>

          <span className="contact-page-badge">GET IN TOUCH</span>
          <h1 className="contact-page-title">Send Us A Message</h1>
          <p className="contact-page-subtitle">
            Have questions about our sustainable handmade bamboo furniture or want to discuss custom designs? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-card-container">
          <div className="contact-section">
            <Form />
            <Info />      
          </div>
        </div>
        
        <Addresses/>
        {/* <Disclaimer/> */}
        <Footer />
      </div>
    </>
  );
};
export default ContactSection