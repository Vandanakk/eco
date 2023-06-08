import React from "react";
import { Link } from 'react-router-dom';
// import "../../pages/Products/product.css";
import categories from "../../categories";
import './featuredproducts.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import babyChair from "./babyChair.jpg"
import babydollCrib from "./babydollCrib.jpg"
import hangingChair from "./hangingChair.jpg"
import kidChair from "./kidChair.jpg"
import mudhaSet from "./mudhaSet.jpg"
import newborn from "./newborn.jpg"
import peedi2 from "./peedi2.jpg"
import tray from "./tray.jpg"


import {
  MDBContainer, MDBRow, MDBCol, MDBRipple, MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";





const FeaturedProducts = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>

      <h1 className="product-title center marginTop">We Think You'll Love These Products</h1>

      <div className="marginside">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img
              src={babyChair}
              className="w-100"
              alt="Baby Chair"
            />

          </div>
          <div>
            <img
              src={babydollCrib}
              className="w-100"
              alt="Baby Doll Crib"
            />
          </div>
          <div>
            <img
              src={hangingChair}
              className="w-100"
              alt="Hanging Chair" />
          </div>
          <div>
            <img
              src={kidChair}
              className="w-100"
              alt="Kids Chair"
            />
          </div>
          <div>
            <img
              src={mudhaSet}
              className="w-100"
              alt="Ottomans"
            />
          </div>
          <div>
            <img
              src={newborn}
              className="w-100"
              alt="NewBorn Bed"
            />
          </div>
          <div>
            <img
              src={peedi2}
              className="w-100"
            />
          </div>
          <div>
            <img
              src={tray}
              className="w-100"
            />
          </div>
        </Carousel >;
      </div >
    </>
  );
};
export default FeaturedProducts;