import React from "react";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import categories from "../../categories";
import Footer from "../../component/Footer/footer";
import './category.css';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Category = () => {
  const { t } = useTranslation(); 

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

  return (
    <>
      <Helmet>
        <title>{t('CATEGORY_HEADER')}</title>
        <meta name="description" content={t('CATEGORY_DESCRIPTION')} />
      </Helmet>

      <div className="category-page-wrapper">
        {/* Header Section */}
        <div className="category-header-container text-center">
          <span className="category-badge">PRODUCT CATALOG</span>
          <h1 className="category-page-title">Browse Our Collections</h1>
          <div className="category-header-line"></div>
          <p className="category-page-desc">
            Explore our comprehensive ranges of sustainable handcrafted cane, bamboo, and rattan furniture. Built for international durability and commercial wholesale demands.
          </p>
        </div>

        {/* Categories Grid */}
        <MDBContainer fluid className="px-4 pb-5">      
          <MDBRow className="justify-content-center">
            {categories
              .filter((item) => item.featured === false)
              .map((productCategory) => {
                const { id, image, category } = productCategory;
                return (
                  <MDBCol sm="6" md="4" lg="3" className="mb-4" key={id}>
                    <div className="category-card-wrapper">
                      <Link to={`/productlist/${category}`} className="category-card-link">
                        <div className="category-image-box">
                          <LazyLoadImage
                            src={image}            
                            className="category-img"
                            alt={formatCategoryName(category)}
                          />
                        </div>
                        <div className="category-card-body">
                          <h5 className="category-card-title">{formatCategoryName(category)}</h5>
                          <span className="category-card-action">View Catalog &rarr;</span>
                        </div>
                      </Link>
                    </div>
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