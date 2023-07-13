import React from 'react'
import Form from './Form'
import Info from './Info'
import Footer from "../../component/Footer/footer";
import Disclaimer from '../Disclaimer/disclaimer';
import Helmet from 'react-helmet';

import './contact-section.css'


const ContactSection = () => (
  <>
   <Helmet>
        <title>{'CONTACT page'}</title>
        <meta name="description" content={'This is the CONTACT page'} />
      </Helmet>
    <div className="contact-section">
      <Form />
      <Info />      
    
    </div>
    <Disclaimer/>
    <Footer />
  </>
)
export default ContactSection