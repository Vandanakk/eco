import React from "react";
import { useParams } from 'react-router-dom'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardTitle,
  MDBCardText
} from "mdb-react-ui-kit";
import "./productlist.css";
import data from "../../data";
import categories from "../../categories";
import { ProductData } from "../ProductDetails/productModel";
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Productlist = (props: any) => {
  const { t } = useTranslation(); 
  const [scrollableModal, setScrollableModal] = React.useState(false);
  const category = props.match.params.category;
  const Filtered = (element: any) => {
    return (element.category == category);
  }
  const CategoryFiltered = (element: any) => {
    return (element.category == category);
  }
  const fiteredData = data.filter(Filtered);
  const categoryfiteredData = categories.filter(CategoryFiltered);
  const [modelData, setmodelData] = React.useState<ProductData>(new ProductData());

 
  const postUserData = (event: any) => {

    const productFiltered = (element: any) => {
      return (element.name == event);
    }
    setScrollableModal(!scrollableModal);      
    let model = fiteredData.filter(productFiltered);
    
    let updatedModel = 
    {
     id: model[0].id,
     name: model[0].name,
     image: model[0].image,
     price: model[0].price,
     category: model[0].category,
     description: model[0].description,
     reviews: model[0].reviews,
     lastPrice: model[0].lastPrice,
     feature1: model[0].feature1,
     feature2: model[0].feature2,
     feature3: model[0].feature3,
     feature4: model[0].feature4,
     feature5: model[0].feature5,
     feature6: model[0].feature6
    }     
    setmodelData(updatedModel);  
    
  };


  return (
    <>
    <Helmet>
    <title>{categoryfiteredData[0].name}</title>
    <meta name="description" content={categoryfiteredData[0].description} />
  </Helmet>
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        {
          fiteredData.map((products) => {
            const { id, image, name, price, category, description, reviews, lastPrice
              , feature1, feature2, feature3, feature4, feature5, feature6 } = products;

            return (
              <MDBCol md="12" xl="10">
                <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <MDBCardImage
                            src={image}
                            fluid
                            className="w-100"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
                      <MDBCol md="6">
                        <h5>{name}</h5>
                        <div className="d-flex flex-row">
                          <div className="text-danger mb-1 me-2">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                          </div>
                          <span>{reviews}</span>
                        </div>
                        <div className="mt-1 mb-0 text-muted small">
                          <span>{feature1}</span>
                          <span className="text-primary"> • </span>
                          <span>{feature2}</span>
                          <span className="text-primary"> • </span>
                          <span>
                            {feature3}
                            <br />
                          </span>
                        </div>
                        <div className="mb-2 text-muted small">
                          <span>{feature4}</span>
                          <span className="text-primary"> • </span>
                          <span>{feature5}</span>
                          <span className="text-primary"> • </span>
                          <span>
                            {feature6}
                            <br />
                          </span>
                        </div>
                        <p className="text-truncate mb-4 mb-md-0">
                          {description}
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="6"
                        lg="3"
                        className="border-sm-start-none border-start"
                      >
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">${price}</h4>
                          <span className="text-danger">
                            <s>${lastPrice}</s>
                          </span>
                        </div>
                        <h6 className="text-success">Shipping - Negotiable</h6>
                        <div className="d-flex flex-column mt-4">
                          {/* <MDBBtn color="primary" size="sm" href={`/productdetails/${scrollableModal}`}>
                      Details
                    </MDBBtn> */}
                          <MDBBtn color="primary" size="sm" onClick={() =>postUserData(name)}>Details</MDBBtn>
                          {/* <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn> */}
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            );
          })}
      </MDBRow>
      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{modelData?.name}</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={modelData.image} fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>
                  <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">${modelData.price}</h4>
                          <span className="text-danger">
                            <s>${modelData.lastPrice}</s>
                          </span>
                        </div>
                    </MDBCardTitle>
                  <MDBCardText>                 
                        <div className="d-flex flex-row">
                          <div className="text-danger mb-1 me-2">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                          </div>
                          <span>{modelData.reviews}</span>
                        </div>
                        <div className="mt-1 mb-0 text-muted small">
                          <span>{modelData.feature1}</span>
                          <span className="text-primary"> • </span>
                          <span>{modelData.feature2}</span>
                          <span className="text-primary"> • </span>
                          <span>
                            {modelData.feature3}
                            <br />
                          </span>
                        </div>
                        <div className="mb-2 text-muted small">
                          <span>{modelData.feature4}</span>
                          <span className="text-primary"> • </span>
                          <span>{modelData.feature5}</span>
                          <span className="text-primary"> • </span>
                          <span>
                            {modelData.feature6}
                            <br />
                          </span>
                        </div>                       

                  </MDBCardText>
                  

                  <MDBCardText>
                   {modelData.description}
                  </MDBCardText>
                
                </MDBCardBody>
              </MDBCard>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>            
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </MDBContainer>

    </>
  );
}

export default Productlist;