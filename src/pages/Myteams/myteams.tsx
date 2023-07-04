import { Link } from "react-router-dom";
import "./myteams.css";
import ourpartners from "../../images/myteams.jpg"

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Myteams = () => {
  return (    <>
    
    <h1 className="product-title center marginMyTeamTop">Meet Our Team</h1>
      <div className="about-wrapper flex-columns">
        <div className="product-center">

          <section className="content-prod">     
         
              <MDBCard className='mb-3'>
                <MDBCardImage position='top' src={ourpartners} />
              </MDBCard>            

          </section>
        </div>       
      </div>
    </>
  );
};

export default Myteams;