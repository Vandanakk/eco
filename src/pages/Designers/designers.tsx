import { Link } from "react-router-dom";
import "./designers.css";

import designersmainpage from "../../images/designers11.jpeg"
import designermona from "../../images/desingermona.jpeg"
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';


import categories from "../../categories";
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
import designerhome from "../../images/designerhome.jpg"

const Designers = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <div>
    <Helmet>
        <title>{t('DESIGNER_HEADER')}</title>
        <meta name="description" content={t('DESIGNER_CONTENT')} />
      </Helmet>
    <MDBCard className='mb-3'>
      <MDBCardImage position='top' height='700px'  src={designerhome} />     
    </MDBCard>

      <MDBCard >
        <MDBCardBody>
        <MDBCol >
          <MDBCardTitle >Meet Our Designers</MDBCardTitle>
          <MDBCardText >Our team of professional furniture designers who bring a wealth of creativity and expertise to our company. They are instrumental in providing innovative designs for our wide range of wooden, bamboo, and rattan products.
With a keen eye for detail and a passion for craftsmanship, our designers excel in creating unique and aesthetically pleasing furniture pieces. From bamboo chairs and tables to newborn photography props, swing chairs, and garden chairs, their designs cater to diverse needs and preferences.
Our designers combine their extensive knowledge of materials and craftsmanship techniques to produce furniture that not only meets the highest standards of quality but also exudes elegance and functionality. They stay up-to-date with the latest trends and design principles to ensure that our furniture pieces are not only visually appealing but also align with modern sensibilities.
Whether it's incorporating intricate details, exploring innovative forms, or enhancing comfort and ergonomics, our designers constantly push boundaries to deliver exceptional designs. Their commitment to innovation and their ability to blend traditional craftsmanship with contemporary aesthetics make our furniture pieces stand out in the market.
</MDBCardText>
        </MDBCol>
        </MDBCardBody>
      </MDBCard>

      <MDBCard alignment='center'  className="margindesignerside marginMyTeamTop">
        <MDBRow  >
          <MDBCol md='6'>
            <MDBCardImage src={designersmainpage} alt='...' fluid />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody>
              <MDBCardTitle className="content-prod">Viren K</MDBCardTitle>
              <MDBCardText className="main-hero-para">
              
Introducing Viren, our esteemed designer who brings a wealth of expertise to the realm of furniture manufacturing. With a Bachelor and Master's degree in Fine Arts, a postgraduate degree in Law, a diploma in Naturopathy & Yoga Science, and a Diploma in Cinematography & Film making, Viren's diverse educational background lends a multidimensional perspective to his work.
Passionate about fostering global cultural relations, Viren approaches the world with love, compassion, and forgiveness. His portfolio showcases his exceptional talent in designing art, architecture, cultural, and educational projects. Additionally, Viren is an accomplished author. 
Beyond his creative pursuits, Viren is deeply committed to youth empowerment and environmental conservation. He actively engages in a transformative project in Ladakh Himalaya.
Viren's exceptional skills, extensive experience, and dedication to his craft make him a true master in innovating furniture products. His unique perspective and profound understanding of global cultures enable him to create designs that inspire and captivate.

              </MDBCardText>
            
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

      <MDBCard alignment='center' className="margindesignerside">
        <MDBRow  >
        <MDBCol md='6'>
            <MDBCardBody>
              <MDBCardTitle className="content-prod" >Monika</MDBCardTitle>
              <MDBCardText className="main-hero-para" >
              Monika is a highly skilled and accomplished furniture designer with a passion for innovation and creativity. With over a decade of experience in the industry, she brings a unique blend of artistic vision and functional expertise to her work. Monika holds a Bachelor's degree in Fine Arts with a specialization in Applied Art, as well as a Master's degree in Fine Arts with a focus on graphics designing. She is currently pursuing her PhD in Applied Arts from Delhi University.
              Monika's impressive portfolio includes working on prestigious projects such as the Namami Gange project for Doordarshan and serving as an art director for lantern designing for the Korean embassy. Monika has conducted workshops for the Center for Cultural Resources and Training (CCRT) and has been a freelance columnist for Art Times Newspaper. Additionally, she has showcased her artwork in numerous exhibitions and workshops across the country.
           With a deep understanding of design principles and a commitment to delivering exceptional results, Monika's expertise in furniture innovation is unparalleled. Her ability to blend aesthetics with functionality ensures that each piece she designs is not only visually striking but also practical for everyday use. Monika's passion for her craft, coupled with her extensive experience, makes her an invaluable asset to our furniture design team.
              </MDBCardText>
            
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardImage src={designermona} alt='...' fluid />
          </MDBCol>
          
        </MDBRow>
      </MDBCard>


      <Footer />
      </div>
    </>
  );
};

export default Designers;