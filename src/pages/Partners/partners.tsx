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

const Partners = () => {
  return (
    <>
      {/* <MDBCard className='mb-3'>
        <MDBCardImage position='top' height='700px' src={partnersmainpage} alt='/productlist/PetBeds' />
      </MDBCard> */}


      <div className="about-wrapper flex-columns">
        <div className="product-center">

          <section className="content-prod">     
         
              <MDBCard className='mb-3'>
                <MDBCardImage position='top' height='400px' src={ourpartners} />
              </MDBCard>            

          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Partners;