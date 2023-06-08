import React from "react";
import "./footer.css";
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
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import PrivacyModal from "../../pages/Policy/policy"

const Footer = () => {
  return (
    // <footer className="footer">
    //     <div className="footer-container">
    //         <div className="item1">
    //             <PrivacyModal />
    //         </div>

    //         <div className="item2">
    //             <span style={{ paddingRight: 5 }}>Copyright </span>
    //             <FontAwesomeIcon icon={faCopyright} />{" "}
    //             <span style={{ paddingLeft: 5 }}>
    //                 {new Date().getFullYear()} Ecowoodies. All Rights
    //                 Reserved.
    //             </span>
    //         </div>
    //         <a
    //             href="https://www.facebook.com/ecowoodies/"
    //             target="_blank"
    //             className="item3"
    //         >
    //             <FontAwesomeIcon icon={faFacebook} />
    //         </a>
    //         <a
    //             href="https://www.instagram.com/ecowoodies/"
    //             target="_blank"
    //             className="item4"
    //         >
    //             <FontAwesomeIcon icon={faInstagram} />

    //             </a>

    //         <a
    //             href="https://twitter.com/ecowoodies"
    //             target="_blank"
    //             className="item5"
    //         >
    //             <FontAwesomeIcon icon={faTwitter} />
    //         </a>          

    //         <a
    //             href="https://youtube.com/@ecowoodies"
    //             target="_blank"
    //             className="item3"
    //         >
    //             <FontAwesomeIcon icon={faYoutube} />
    //         </a>          


    //         {false && <PrivacyModal />}
    //     </div>
    // </footer>
    <MDBFooter style={{ backgroundColor: '#9ccc65' }} color='black-50' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between'>
         
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-4'>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>What's Popular</h6>
              <p>
                <a href='/productlist/Ottoman' className='text-reset'>
                  Ottomans
                </a>
              </p>
              <p>
                <a href='/productlist/PetBeds' className='text-reset'>
                  Pet Beds
                </a>
              </p>
              <p>
                <a href='/productlist/Bench' className='text-reset'>
                 Bamboo Patio Collection
                </a>
              </p>
              <p>
                <a href='/productlist/Sofaset' className='text-reset'>
                  Sofa Set
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>About Us</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blogs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Story
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                A-97, Shalimar Garden, UP, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@ecowoodies.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9686722949
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
   
       <div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='https://www.facebook.com/ecowoodies/'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='https://twitter.com/ecowoodies'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='https://in.pinterest.com/ecowoodies/'
              role='button'
            >
              <MDBIcon fab icon='pinterest'/>
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='https://www.instagram.com/ecowoodies/'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='https://in.linkedin.com/company/ecowoodies.com'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>  
        
      </div>
      <div className='text-center' style={{ backgroundColor: 'black',color:'white' }}>
        © 2023 Copyright:
        <a className='text-reset' href='https://ecowoodies.com/'>
           Ecowoodies. All Right Reserved.
        </a>
     
         
        
      </div>
    </MDBFooter>
  );
};

export default Footer;