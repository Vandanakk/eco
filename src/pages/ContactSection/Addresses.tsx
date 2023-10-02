import React from "react";
import "./Addresses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

const Addresses = () => {
  return (
    
    <MDBFooter color='black-50' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between'>
         
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-4'>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>Marketing Office - Canada</h6>
             
              <p>
                <MDBIcon icon="home" className="me-2" />
                630 Sauve St Milton ON L9T9A6
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +1 647-496-3636
              </p>

              <p>
                <MDBIcon icon="home" className="me-2" />
                12920 62 Ave, Survey, BC V3X 2EB
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +1 604-338-7757
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4'>Marketing Office - USA</h6>
            <p>
                <MDBIcon icon="home" className="me-2" />
                19288 S, 186th DR Queen Creek, Arizona -85142, USA
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='fw-bold mb-4'>Marketing Office - Germany</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Friedrich Ebert Str 61A 64342 Seeheim, Germany
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +49 17672643750
              </p>
         
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>   

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-4'>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>Workshop - Garh Mukteshwar</h6>
             
              <p>
                <MDBIcon icon="home" className="me-2" />
                No. 3/35 Ahata Basti Ram, Garh Mukteshwar, Uttar Pradesh - 245205, India
              </p>             
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4'>Workshop - Tripura</h6>
            <p>
                <MDBIcon icon="home" className="me-2" />
                Agartala, Tripura Agartala - 799001, West Tripura, Tripura, India
              </p>           
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4'></h6>
           
            </MDBCol>
        
          </MDBRow>
        </MDBContainer>
      </section>   

    </MDBFooter>
  );
};

export default Addresses;