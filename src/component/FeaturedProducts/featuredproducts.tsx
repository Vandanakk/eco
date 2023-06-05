import React from "react";
import { Link } from 'react-router-dom';
// import "../../pages/Products/product.css";
import categories from "../../categories";
import './featuredproducts.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import charpai4 from "./charpai4.jpg"
import charpai6 from "./charpai6.jpg"
import charpai7 from "./charpai7.jpg"
import charpai10 from "./charpai10.jpg"
import lamp23 from "./lamp23.jpg"
import mudhaSet6 from "./mudhaSet6.jpg"

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

      <h1 className="product-title center marginTop" >Featured Categories</h1>


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
              src={charpai4}
              className="w-100"
            />

          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            />
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            /></div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            />
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            />
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            />
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            />
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="w-100"
            />
          </div>
        </Carousel >;
      </div >
    </>
  );
};
export default FeaturedProducts;