import React, { useState,useRef } from "react";
import Footer from "../../component/Footer/footer";
import "./contactus.css"
import emailjs from '@emailjs/browser';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation(); 
  const form = useRef();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event:any) => {
    name = event.target.name
    value =event.target.value;

    setUserData({ ...userData, [name]: value });
  };


 
  // connect with firebase
  const submitData = async (event :any) => {
  
    const { firstName, lastName, phone, email, address, message } = userData;


    if (firstName && lastName && phone && email && address && message) {
      const inputData =JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        address,
        message,
      });
      emailjs.sendForm('service_tc8ac9a', 'template_0l67lvq', inputData, '3wu5xegb9BGPZ678e')
      .then((result) => {
       
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
          alert("Thank you for contacting us!  We have received your message and appreciate your interest in our bamboo and cane furniture. A member of our team will review your inquiry and respond to you as soon as possible. Please allow up to 24-48 hours for a response, although we usually respond much sooner.");
      }, (error) => {
        alert("plz fill the data");
      });       
       
    
    } else {
      alert("plz fill all the required information in contact us form");
    }
  };

  return (
 <>
  <Helmet>
        <title>{t('CONTACT_CONTENT')}</title>
        <meta name="description" content={t('CONTACT_HEADER')} />
      </Helmet>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-7">
                  <h2 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h2>
                  <p className="main-hero-para">
                 Welcome to Ecowoodies, your one-stop-shop for high-quality bamboo and cane furniture.                
                 We understand that furniture is an important investment and we are committed to providing you with
                 exceptional customer service. Our sales team will guide you through the entire process, from selecting
                 the right pieces to arranging delivery and installation, ensuring a hassle-free experience.
                 <br />               

                To connect with our sales team, simply fill out the form on our website, call us, or visit our showroom
                located in Uttar Pradesh, India. We  are always happy to help and answer any questions you may have.
                At Ecowoodies, we are passionate about promoting sustainable living and our bamboo and 
                cane furniture reflects our commitment to eco-friendly practices. Our sales team can share with you
                the many benefits of choosing bamboo and cane furniture, including its durability, low maintenance, 
                and eco-friendliness.
              <br />
              <br />
                So why wait? Connect with our sales team today and discover the many benefits of our beautiful and
                sustainable bamboo and cane furniture. We look forward to hearing from you!

                  </p>
                  {/* <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure> */}
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-5">
                <h2 className="main-heading fw-bold">
                     <br />    
                     <br />                      

                  </h2>
                  <form  method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label">
                        I agree that the that Ecowoodies may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
        </div>      
      </section>   
      <Footer/> 
      </>
      
      
     
    
  );
};

export default ContactUs;