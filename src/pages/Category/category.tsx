import React from "react";
import {Link} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import categories from "../../categories";
import Footer from "../../component/Footer/footer";
import './category.css'

function category() {
  return (
    <>
    <div>
    <MDBContainer fluid className="my-5 text-center">      
      <MDBRow>
      {categories.map((productCategory) => {
          const { id, image, name, price,category } = productCategory;
          return (
           
            <MDBCol md="4" lg="2" className="mb-4">
              <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
              >
                <img
                  src={image}            
                  className="w-100"
                />
                <Link to={`/productlist/${category}`}>
                {/* <a href='/productlist'> */}
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                        {name}
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                  </Link>
              </MDBRipple>
            </MDBCol>          
        
          );
        })}
        </MDBRow>
    </MDBContainer>
    </div>
    <Footer/>
    </>
  
  );
 
}

export default category;