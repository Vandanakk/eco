import React from "react";
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';
import { 
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
  MDBCardTitle,
  MDBCardText, 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,


} from "mdb-react-ui-kit";
import "./productdetails.css";
import data from "../../data";  
const Productdetails = (props:any) => {

  const openClose = props.match.params.scrollableModal;
  const [scrollableModal, setScrollableModal] = React.useState(openClose);  


  return ( 
<>
  
    <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
    <MDBModalDialog scrollable>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>Title</MDBModalTitle>
          <MDBBtn
            className='btn-close'
            color='none'
            onClick={() => setScrollableModal(!scrollableModal)}
          ></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
            Close
          </MDBBtn>
          <MDBBtn>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
  </>
  );
}
export default Productdetails;