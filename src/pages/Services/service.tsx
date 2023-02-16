import React from "react";
import "./services.css";
import Footer from "../../component/Footer/footer";
export default function Services() {
  return (
    <>
      <h1 className="product-title center">Services</h1>
      <section id="about" className="icons bg-light">
        <div className="flex-items">
          <div>
            {/* <i className="fa fa-truck fa-2x"></i> */}
            <div>
              <h3>End to End Support </h3>
              <p>
              Provide detailed information on the products we sell, including dimensions, materials, colors, pricing and also offer multiple photos of each product so customers can get a good idea of what the piece looks like from all angles.
              </p>
            </div>
          </div>
          <div>
            {/* <i className="fa fa-check fa-2x"></i> */}
            <div>
              <h3>Customimzation</h3>
              <p>
              We offer customization options, such as custom fabrics or finishes, to allow customers to create a piece that perfectly fits their personal style and needs
              </p>
            </div>
          </div>
          <div>
            {/* <i className="fa fa-wrench fa-2x"></i> */}
            <div>
              <h3>Customer Support Service</h3>
              <p>
              5.	We  have customer support teams available to answer questions and assist customers with any issues they may have.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}