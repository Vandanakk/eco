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
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import PrivacyModal from "../Policy/policy"

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

        <MDBFooter className='bg-dark text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
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
  
            {/* <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn> */}
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-white' href='https://www.ecowoodies.com/'>
            Ecowoodies. All Right Reserved.
          </a>
        </div>
      </MDBFooter>
    );
};

export default Footer;