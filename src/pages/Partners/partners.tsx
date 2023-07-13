import { Link } from "react-router-dom";
import "./partners.css";

import partnersmainpage from "../../images/partnershome.jpg"
import ourpartners from "../../images/ourpartners.jpg"

import categories from "../../categories";
import Footer from "../../component/Footer/footer";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation(); 
  return (
    <>
     <Helmet>
        <title>{t('PARTNER_HEADER')}</title>
        <meta name="description" content={t('PARTNER_CONTENT')} />
      </Helmet>

      {/* <MDBCard className='mb-3'>
        <MDBCardImage position='top' height='700px' src={partnersmainpage} alt='/productlist/PetBeds' />
      </MDBCard> */}


     
        <div className="product-center">

          <section className="content-prod">     
         
              <MDBCard className='mb-3'>
                <MDBCardImage position='top' src={ourpartners} />
              </MDBCard>            

          </section>
        </div>

        <Footer />
      
    </>
  );
};

export default Partners;