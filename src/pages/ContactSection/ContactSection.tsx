import React from 'react'
import Form from './Form'
import Info from './Info'
import Footer from "../../component/Footer/footer";
import MapSection from '../../component/Map/map' // import the map here
import Disclaimer from '../Disclaimer/disclaimer';

import './contact-section.css'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 28.686881309349836,
    lng: 77.33571968237355    
  } // our location object from earlier

const ContactSection = () => (
  <>
    <div className="contact-section">
      <Form />
      <Info />      
    
    </div>
    <Disclaimer/>
    <Footer />
  </>
)

export default ContactSection