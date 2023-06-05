
import React from "react";
import ottomon from "../../images/8.png"
import baskets from "../../images/4.png"
import dinings from "../../images/11.jpg"
import canesofas from "../../images/3.png"
import newborn from "../../images/newborn.jpg"

import Carousel from 'react-bootstrap/Carousel';
import "./main.css"; 


export default function Main() {
  return (
    <div className="marginTopCarasoul">
	  <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ottomon}
          alt="Ottoman"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={canesofas}
          alt="Cane Sofas"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dinings}
          alt="Dining Items"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={baskets}
          alt="Baskets"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newborn}
          alt="Newborn Photography Prop"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>     
    </Carousel>

    </div>

  );
  }