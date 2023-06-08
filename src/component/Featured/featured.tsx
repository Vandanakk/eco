import React from "react";
import {Link} from 'react-router-dom';
//  import "../../pages/Products/product.css";
 import categories from "../../categories"; 
 import './featured.css'
 import { MDBContainer, MDBRow, MDBCol, MDBRipple,MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,  
   } from "mdb-react-ui-kit";



const Featured = () => {
  return (
    <>
   
    <h1 className="product-title center marginTop" >New Arrivals</h1>
   
    
   <div className="marginside">
     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
     {categories
       .filter((item) => item.featured === true)
      .map((productCategory) => {
          const { id, image, name, price,category } = productCategory;
          return (
      <MDBCol>
      <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
              >
        <MDBCard>
          <MDBCardImage
            src={image}
            alt='...'
            position='top'
          />
           <Link to={`/productlist/${category}`}>             
                
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                  </Link>
          <MDBCardBody>
            <MDBCardTitle>  {name} </MDBCardTitle>
            <MDBCardText>
            Explore Now
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBRipple>
      </MDBCol>

);
})}
    </MDBRow> 
    </div>
    </>
  );
};
export default Featured;