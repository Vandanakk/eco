import { Link } from "react-router-dom";
import "./services.css";

import qualitycontrol from "../../images/qualitycontrol.jpg"
import customization from "../../images/customization.jpg"
import production from "../../images/production.jpg"
import designdevelopment from "../../images/designdevelopment.jpg"
import packaging from "../../images/packaging.jpg"
import oemodm from "../../images/oemodm.jpg"



import Footer from "../../component/Footer/footer";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import serviceshomepage from "../../images/serviceshomepage.jpg"
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Whyus = () => {
  const { t } = useTranslation(); 
  return (
    <>
     <Helmet>
        <title>{t('SERVICES_HEADER')}</title>
        <meta name="description" content={t('SERVICES_CONTENT')} />
      </Helmet>
      <div>

        <MDBCard className='mb-3'>
          <MDBCardImage position='top' className="mainImageHeight" src={serviceshomepage} />
        </MDBCard>



        <MDBCard className="marginserviceside"  alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Manufacturing and Production</MDBCardTitle>
                <MDBCardText className="main-hero-para">

                In our Production and Manufacturing section, we take pride in our specialization in bamboo product innovation and custom product development. With a legacy of 40 years in manufacturing furniture and handicrafts, we have established ourselves as experts in indoor and outdoor rattan, cane, sarkanda, and bamboo products. Our journey began by collaborating with local artisans, and today we are renowned for our customization capabilities. We are committed to sustainability, using waste and recyclable eco-friendly materials in our manufacturing process. Every product we create is not only beautifully crafted but also environmentally safe. Experience our exceptional production and manufacturing expertise as we bring your vision to life with the highest quality bamboo products.
                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardImage src={production} alt='...' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCard>

        <MDBCard className="marginserviceside"  alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardImage src={customization} alt='...' fluid />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Customization</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                Our Customization Product process is the heart of our business. With decades of experience, we specialize in bamboo product innovation and custom development. Collaborating with local artisans, we have earned a renowned name in crafting indoor and outdoor furniture and handicrafts using rattan, cane, sarkanda, and bamboo. Our dedication to customization ensures that 80% of our portfolio is tailored to our clients' unique preferences. We take pride in our sustainable approach, using waste and recyclable materials to create environmentally safe products.
                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

        <MDBCard className="marginserviceside"  alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Quality Control</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                
In our Quality Control section, we prioritize delivering flawless products by implementing rigorous testing and assurance measures at every stage of production. We understand the importance of ensuring that our customers receive the highest quality bamboo furniture and handicrafts. From the initial stages of material selection to the final inspection before packaging, our dedicated team conducts comprehensive quality checks to minimize defects and ensure exceptional craftsmanship. We employ advanced testing techniques and adhere to strict industry standards to guarantee that each item meets our stringent quality criteria. By incorporating a meticulous quality control process, we strive to provide you with products that are virtually defect-free, allowing you to enjoy the beauty and durability of our creations with complete confidence.

               

                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardImage src={qualitycontrol} alt='...' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCard>     

        <MDBCard className="marginserviceside"  alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardImage src={designdevelopment} alt='...' fluid />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Design and Development</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                In our Design and Development section, we bring decades of expertise in bamboo product innovation to create exceptional furniture and handicrafts. Our team of skilled artisans specializes in crafting indoor and outdoor products using rattan, cane, sarkanda, and bamboo. With a focus on customization, we collaborate closely with clients to deliver tailored solutions that reflect their unique style and preferences. By using waste and recyclable materials, we ensure our designs are not only visually stunning but also environmentally friendly.

                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            

          </MDBRow>
        </MDBCard> 

         <MDBCard className="marginserviceside"  alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">Packaging and Shipping</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                In our Packaging and Export Delivery section, we take pride in ensuring the safe and secure transportation of our bamboo furniture and handicrafts. We have perfected our packaging techniques to protect our products during transit. We also prioritize sustainability by using eco-friendly packaging materials. Our efficient export delivery ensures timely and reliable shipments to our valued clients worldwide.
                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardImage src={ packaging} alt='...' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCard>    

         <MDBCard className="marginserviceside"  alignment='center'>
          <MDBRow  >

            <MDBCol md='6'>
              <MDBCardImage src={oemodm} alt='...' fluid />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle className="content-prod">OEM and ODM Services</MDBCardTitle>
                <MDBCardText className="main-hero-para">
                In our OEM and ODM section, we offer exceptional opportunities for businesses seeking customized bamboo furniture and handicrafts. With our expertise in bamboo product innovation and experience, we collaborate with clients to bring their unique ideas to life. Our commitment to using eco-friendly materials ensures sustainable and environmentally conscious manufacturing. Partner with us for outstanding OEM and ODM solutions tailored to your specific requirements.

                </MDBCardText>

              </MDBCardBody>
            </MDBCol>

            

          </MDBRow>
        </MDBCard>        
        <Footer />
      </div>
    </>
  );
};

export default Whyus;