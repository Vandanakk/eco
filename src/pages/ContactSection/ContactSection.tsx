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
          <span className="contact-page-badge">GET IN TOUCH</span>
          <h1 className="contact-page-title">Send Us A Message</h1>
          <div className="contact-page-subtitle-line"></div>
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