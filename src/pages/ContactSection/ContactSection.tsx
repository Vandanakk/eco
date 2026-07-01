import React from 'react'
import Form from './Form'
import Info from './Info'
import Footer from "../../component/Footer/footer";
import Addresses from './Addresses';
import Disclaimer from '../Disclaimer/disclaimer';
import Helmet from 'react-helmet';

import './contact-section.css'


const ContactSection = () => (
  <>
   <Helmet>
        <title>{'CONTACT page'}</title>
        <meta name="description" content={'This is the CONTACT page'} />
      </Helmet>
    
    <div className="contact-page-header-container">
      <div className="header-ornament-line-top"></div>
      <h1 className="contact-page-title">SEND US A MESSAGE</h1>
      <div className="header-ornament-line-bottom"></div>
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
  </>
)
export default ContactSection