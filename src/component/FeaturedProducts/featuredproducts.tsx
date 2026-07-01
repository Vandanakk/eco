import React from "react";
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import babyChair from "./babyChair.jpg"
import babydollCrib from "./babydollCrib.jpg"
import hangingChair from "./hangingChair.jpg"
import kidChair from "./kidChair.jpg"
import mudhaSet from "./mudhaSet.jpg"
import newborn from "./newborn.jpg"
import peedi2 from "./peedi2.jpeg"
import tray from "./tray.jpg"

import { LazyLoadImage } from "react-lazy-load-image-component";
import './featuredproducts.css';

const FeaturedProducts = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const products = [
    { src: babyChair, alt: "Baby Chair", category: "Kidchairs" },
    { src: babydollCrib, alt: "Baby Doll Crib", category: "Babydollstrollers" },
    { src: hangingChair, alt: "Hanging Chair", category: "Hangingchairs" },
    { src: kidChair, alt: "Kids Chair", category: "Kidchairs" },
    { src: mudhaSet, alt: "Ottoman Set", category: "Ottoman" },
    { src: newborn, alt: "Newborn Bed", category: "NewBorns" },
    { src: peedi2, alt: "Peedi Stool", category: "Ottoman" },
    { src: tray, alt: "Tray / Platter", category: "trays" }
  ];

  return (
    <section className="eco-section eco-recommended-section">
      <div className="eco-section-container">
        {/* Top-Left Leafy Branch SVG */}
        <svg className="eco-decor-leaf eco-decor-tl" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,-10 Q40,25 90,80" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M15,10 C5,20 12,32 25,25 C38,18 30,5 15,10 Z" fill="#8cb978" opacity="0.75" />
          <path d="M35,28 C25,38 32,50 45,43 C58,36 50,23 35,28 Z" fill="#9bc388" opacity="0.8" />
          <path d="M55,48 C45,58 52,70 65,63 C78,56 70,43 55,48 Z" fill="#8cb978" opacity="0.75" />
          <path d="M22,12 C35,2 45,10 38,20 C31,30 18,22 22,12 Z" fill="#b0d59e" opacity="0.7" />
          <path d="M42,30 C55,20 65,28 58,38 C51,48 38,40 42,30 Z" fill="#9bc388" opacity="0.8" />
        </svg>

        {/* Top-Right Hanging Rattan Lamp SVG */}
        <svg className="eco-decor-lamp" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="0" x2="50" y2="60" stroke="#75a165" strokeWidth="1.5" />
          <path d="M30,85 C30,70 40,60 50,60 C60,60 70,70 70,85 C70,90 60,92 50,92 C40,92 30,90 30,85 Z" fill="#e5c890" opacity="0.85" stroke="#75a165" strokeWidth="1.5" />
          <circle cx="50" cy="85" r="7" fill="#fff5d9" />
          <path d="M30,85 Q50,75 70,85 M32,80 Q50,70 68,80 M35,75 Q50,65 65,75 M38,70 Q50,60 62,70" stroke="#75a165" strokeWidth="0.8" />
          <path d="M40,60 Q42,80 40,92 M50,60 Q50,80 50,92 M60,60 Q58,80 60,92" stroke="#75a165" strokeWidth="0.8" />
        </svg>

        {/* Top-Right Leafy Branch SVG (hanging over the lamp) */}
        <svg className="eco-decor-leaf eco-decor-tr" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M130,-10 Q80,30 30,90" stroke="#75a165" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M105,15 C95,5 82,12 88,25 C94,38 110,30 105,15 Z" fill="#8cb978" opacity="0.75" />
          <path d="M85,35 C75,25 62,32 68,45 C74,58 90,50 85,35 Z" fill="#9bc388" opacity="0.8" />
          <path d="M98,22 C108,32 102,45 90,40 C78,35 88,20 98,22 Z" fill="#b0d59e" opacity="0.7" />
          <path d="M78,42 C88,52 82,65 70,60 C58,55 68,40 78,42 Z" fill="#8cb978" opacity="0.75" />
        </svg>

        <div className="eco-section-header">
          <span className="eco-section-subtitle">CURATED FOR YOU</span>
          <h2 className="eco-section-title">We Think You'll Love These Products</h2>
          <div className="eco-section-divider"></div>
        </div>

        <div className="eco-carousel-wrapper">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListClass="eco-custom-dots"
            itemClass="eco-carousel-item-padding"
          >
            {products.map((item, idx) => (
              <div key={idx} className="eco-carousel-card-wrapper">
                <Link to={`/productlist/${item.category}`} className="eco-card-link">
                  <div className="eco-carousel-card">
                    <div className="eco-carousel-img-wrapper">
                      <LazyLoadImage
                        src={item.src}
                        alt={item.alt}
                        className="eco-carousel-img"
                        effect="blur"
                      />
                      <div className="eco-carousel-card-overlay">
                        <span className="eco-overlay-btn">Explore Now</span>
                      </div>
                    </div>
                    <div className="eco-carousel-card-body">
                      <h3 className="eco-carousel-card-title">{item.alt}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;