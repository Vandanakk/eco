
import React from "react";
import ottomon from "../../images/ottoman.jpg" 
import baskets from "../../images/cribsCarasoul.jpg"
import canesofas from "../../images/SofaSetCarasoul1.jpg"
import "./main.css";

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Main() {
  return (
    <div className="marginTopCarasoul">
      <MDBCarousel showControls showIndicators dealy={2000}>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src={ottomon}
          alt='...'   >

        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src={canesofas}
          alt='...'
        >
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={5}
          src={baskets}
          alt='...'
        >
        </MDBCarouselItem>
      </MDBCarousel>
    </div>

  );
}