import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './info.css'

const contactDetails = [
  {
    value: 'A-97, Shalimar Garden Main, Shahibabad,Ghaziabad, UP -201005.  INDIA.',
    icon: locationIcon,
  },
  { value: '+91 9686722949', icon: phoneIcon },
  { value: 'info@ecowoodies.com', icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

// const renderIcons = () =>
//   [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
//     <Icon icon={icon} key={key} className="info-icon" />
//   ))

const Info = () => (
  <section className="info">
    

    <div className="info-details-container">{renderContactDetails()}</div>
    <div className="info-details-container2">  
    Welcome to Ecowoodies, your one-stop-shop for high-quality bamboo and cane furniture.                
    We understand that furniture is an important investment and we are committed to providing
    you with exceptional customer service. Our sales team will guide you through the entire process,
    from selecting the right pieces to arranging delivery and installation, ensuring a hassle-free
    experience.     
    
    So why wait? Connect with our sales team today and discover the many
    benefits of our beautiful and sustainable bamboo
    and cane furniture. We look forward to hearing from you!    
    </div>

    {/* <div className="info-icons-container">{renderIcons()}</div> */}
  </section>
)

export default Info