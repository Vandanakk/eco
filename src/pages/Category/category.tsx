import React from "react";
import {Link} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import categories from "../../categories";
import Footer from "../../component/Footer/footer";
import './category.css'
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";


const Category = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <div>
    <Helmet>
        <title>{t('CATEGORY_HEADER')}</title>
        <meta name="description" content={t('CATEGORY_DESCRIPTION')} />
      </Helmet>
    <MDBContainer fluid className="my-5 text-center">      
      <MDBRow>
      {categories
       .filter((item) => item.featured === false)
      .map((productCategory) => {
          const { id, image, name, price,category } = productCategory;
          return (
           
            <MDBCol md="4" lg="2" className="mb-4">
              <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
              >
                <LazyLoadImage
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
                        {/* {category} */}
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

export default Category;