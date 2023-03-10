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
              <h3>High-quality bamboo and cane furniture </h3>
              <p className="main-hero-para">
              we pride ourselves on offering a wide range of high-quality bamboo and cane furniture products. We understand that your furniture is an investment, and we are dedicated to providing you with durable and long-lasting pieces that are designed to meet your unique style and needs.

Our furniture is crafted by skilled artisans using traditional techniques to create unique and beautiful pieces. We use only the highest quality bamboo and cane materials, ensuring that our furniture is strong, durable, and resistant to wear and tear. Our products come in a variety of styles, including modern, contemporary, traditional, and rustic, so you can find the perfect pieces to match your decor.

Whether you are looking for chairs, tables, beds, sofas, or accessories, we have a wide range of products to choose from. Our furniture pieces are designed to be both functional and stylish, making them the perfect addition to any home or office
              </p>
            </div>
          </div>
          <div>
            {/* <i className="fa fa-check fa-2x"></i> */}
            <div>
              <h3>Custom furniture design</h3>
              <p className="main-hero-para">
              we understand that everyone has different tastes and requirements when it comes to their furniture needs. That's why we offer custom furniture design services to create unique and personalized pieces that are tailored to your individual taste and requirements.

Our team of skilled designers and craftsmen will work closely with you to understand your needs and preferences. We will take into account factors such as the size and shape of your space, your existing decor, and your personal style to create a furniture piece that is perfect for you.

Whether you are looking for a custom-designed sofa, bed, or table, we can help bring your vision to life. We use the highest quality materials and workmanship to ensure that your custom furniture piece is not only beautiful but also functional and durable.
              </p>
            </div>
          </div>
          <div>
            {/* <i className="fa fa-wrench fa-2x"></i> */}
          <div>
              <h3>Delivery and installation</h3>
              <p className="main-hero-para">
              we understand that the delivery and installation process is just as important as the quality of the furniture itself. That's why we offer fast and reliable delivery services to ensure that your furniture is delivered to your doorstep in a timely and efficient manner.

We use trusted shipping partners to ensure that your furniture is delivered safely and securely. Our team will also work with you to schedule a convenient delivery time that works for you.

In addition, we also offer installation services to make sure your furniture is set up and ready to use. Our experienced team of professionals will handle the installation process from start to finish, ensuring that your furniture is properly assembled and ready for use.
              </p>
            </div>
          </div>
          <div>
            {/* <i className="fa fa-wrench fa-2x"></i> */}
          <div>
              <h3>Eco-friendly practices</h3>
              <p className="main-hero-para">
              we are committed to promoting sustainable living through our bamboo and cane furniture products. We take great care to ensure that our products are made using eco-friendly practices and materials, so our customers can feel good about their purchase knowing that they are making a positive impact on the environment.

Our bamboo and cane furniture is made from renewable and sustainable materials, which help to reduce our carbon footprint and promote sustainable living. We also use eco-friendly practices throughout our manufacturing process to ensure that our products are made with minimal impact on the environment.

We believe that by promoting eco-friendly practices and materials, we can make a positive impact on the environment while still providing our customers with high-quality and beautiful furniture              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
      <Footer/>
      </div>
     
    </>
  );
}