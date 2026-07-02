import React from "react";
import { useParams } from 'react-router-dom';
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

  const formatCategoryName = (cat: string) => {
    const mapping: { [key: string]: string } = {
      "Ottoman": "Ottoman Poufs & Stools",
      "BambooLoungeChair": "Lounge Chairs",
      "NewBornBasket": "Newborn Photography Props",
      "lighting": "Woven Pendant Lighting",
      "petCategory": "Eco Pet Beds",
      "bambooSofas": "Bamboo Sofas",
      "Bamboodiningsets": "Dining Sets",
      "baskets": "Handwoven Baskets",
      "Babydollstrollers": "Baby Doll Strollers",
      "Hangingchairs": "Hanging Swing Chairs",
      "kidChairs": "Kid Chairs",
      "rockingChair": "Rocking Chairs",
      "Sofaset": "Sofa Sets",
      "trays": "Woven Trays & Bowls",
      "storageBox": "Storage Boxes",
      "Bambooamplifier": "Bamboo Amplifiers",
      "Chairs2": "Accent Chairs",
      "Shelves": "Shelves & Racks",
      "Tables": "Coffee & End Tables",
      "Bench": "Patio Benches"
    };
    return mapping[cat] || cat.replace(/([A-Z])/g, ' $1').trim();
  };

  const postUserData = (event: any) => {
    const productFiltered = (element: any) => {
      return (element.name == event);
    }
    setScrollableModal(!scrollableModal);      
    let model = fiteredData.filter(productFiltered);
    
    let updatedModel = {
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
    };     
    setmodelData(updatedModel);  
  };

  return (
    <>
      <Helmet>
        <title>{categoryfiteredData[0]?.name || formatCategoryName(category)}</title>
        <meta name="description" content={categoryfiteredData[0]?.description} />
      </Helmet>

      <div className="productlist-page-wrapper">
        {/* Header Section */}
        <div className="productlist-header-container text-center">
          <span className="productlist-badge">WHOLESALE CATALOG</span>
          <h1 className="productlist-page-title">{formatCategoryName(category)}</h1>
          <div className="productlist-header-line"></div>
          <p className="productlist-page-desc">
            Discover premium quality, customizable handcrafted pieces for {formatCategoryName(category).toLowerCase()}. Contact us directly for bulk wholesale container pricing.
          </p>
        </div>

        {/* Product Catalog Grid */}
        <MDBContainer fluid className="px-4 pb-5">
          <MDBRow className="justify-content-center">
            {fiteredData.map((products) => {
              const { id, image, name, price, description, reviews, lastPrice
                , feature1, feature2, feature3, feature4, feature5, feature6 } = products;

              return (
                <MDBCol md="12" xl="10" key={id} className="mb-4">
                  <div className="product-card-wrapper">
                    <MDBRow className="align-items-center">
                      {/* Product Image Column */}
                      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                        <div className="product-image-box">
                          <MDBCardImage
                            src={image}
                            fluid
                            className="product-img"
                            alt={name}
                          />
                        </div>
                      </MDBCol>

                      {/* Product Info Column */}
                      <MDBCol md="12" lg="6" className="product-info-box">
                        <h4 className="product-name">{name}</h4>
                        
                        <div className="product-stars-reviews">
                          <div className="stars-box">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                          </div>
                          <span className="reviews-count">({reviews} reviews)</span>
                        </div>

                        <div className="specs-grid">
                          {feature1 && <span className="spec-tag">{feature1}</span>}
                          {feature2 && <span className="spec-tag">{feature2}</span>}
                          {feature3 && <span className="spec-tag">{feature3}</span>}
                          {feature4 && <span className="spec-tag">{feature4}</span>}
                          {feature5 && <span className="spec-tag">{feature5}</span>}
                          {feature6 && <span className="spec-tag">{feature6}</span>}
                        </div>

                        <p className="product-desc">
                          {description}
                        </p>
                      </MDBCol>

                      {/* Product Price & Call to Action Column */}
                      <MDBCol md="12" lg="3" className="product-action-box">
                        <div className="price-tag-row">
                          <h3 className="product-price">${price}</h3>
                          {lastPrice && (
                            <span className="product-old-price">
                              <s>${lastPrice}</s>
                            </span>
                          )}
                        </div>
                        
                        <div className="moq-badge-box">
                          <span className="moq-badge">MOQ - 450 Sets/Pieces</span>
                        </div>

                        <div className="action-buttons-column">
                          <button className="btn-details-cta" onClick={() => postUserData(name)}>
                            Details
                          </button>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>

        {/* Modal dialog for specs */}
        <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
          <MDBModalDialog scrollable size="lg">
            <MDBModalContent className="modal-custom-content">
              <MDBModalHeader className="modal-custom-header">
                <MDBModalTitle className="modal-custom-title">{modelData?.name}</MDBModalTitle>
                <MDBBtn
                  className='btn-close btn-close-white'
                  color='none'
                  onClick={() => setScrollableModal(!scrollableModal)}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody className="modal-custom-body">
                <div className="modal-product-grid">
                  <div className="modal-image-box">
                    <MDBCardImage src={modelData.image} fluid alt={modelData.name} className="modal-product-img" />
                  </div>
                  <div className="modal-details-box">
                    <div className="price-tag-row mb-3">
                      <h3 className="product-price">${modelData.price}</h3>
                      {modelData.lastPrice && (
                        <span className="product-old-price">
                          <s>${modelData.lastPrice}</s>
                        </span>
                      )}
                    </div>

                    <div className="product-stars-reviews mb-3">
                      <div className="stars-box">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                      </div>
                      <span className="reviews-count">({modelData.reviews} reviews)</span>
                    </div>

                    <div className="specs-grid mb-3">
                      {modelData.feature1 && <span className="spec-tag">{modelData.feature1}</span>}
                      {modelData.feature2 && <span className="spec-tag">{modelData.feature2}</span>}
                      {modelData.feature3 && <span className="spec-tag">{modelData.feature3}</span>}
                      {modelData.feature4 && <span className="spec-tag">{modelData.feature4}</span>}
                      {modelData.feature5 && <span className="spec-tag">{modelData.feature5}</span>}
                      {modelData.feature6 && <span className="spec-tag">{modelData.feature6}</span>}
                    </div>

                    <p className="modal-desc">{modelData.description}</p>
                  </div>
                </div>
              </MDBModalBody>
              <MDBModalFooter className="modal-custom-footer">
                <MDBBtn className="btn-modal-close" onClick={() => setScrollableModal(false)}>
                  Close
                </MDBBtn>            
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </>
  );
}

export default Productlist;