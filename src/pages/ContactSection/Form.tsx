import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import './form.css'

const Form = () => {
  const [userData, setUserData] = useState({
    from_name: "",
    phone: "",
    reply_to: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const postUserData = (event: any) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event: any) => {
    event.preventDefault();
    const { from_name, phone, reply_to, message } = userData;

    if (from_name && phone && reply_to && message) {
      setIsSubmitting(true);
      emailjs.send('service_tc8ac9a', 'template_0l67lvq', userData, '3wu5xegb9BGPZ678e')
        .then((result) => {
          setUserData({
            from_name: "",
            phone: "",
            reply_to: "",
            message: "",
          });
          setIsSubmitting(false);
          alert("Thank you for contacting us! We have received your message and appreciate your interest in our bamboo and cane furniture. A member of our team will review your inquiry and respond to you as soon as possible. Please allow up to 24-48 hours for a response, although we usually respond much sooner.");
        }, (error) => {
          setIsSubmitting(false);
          alert("Something went wrong, please try again.");
        });
    } else {
      alert("Please fill in all the required information in the contact form");
    }
  };

  return (
    <div className="form-container">
      <div className="form-header-container">
        <h3 className="form-section-title">Send a Message</h3>
        <p className="form-section-subtitle">Our sales team will get back to you within 24 hours.</p>
      </div>
      <form className="form" onSubmit={submitData}>
        <div className="form-grid">
          <div className="form-group">
            <div className="form-input-wrapper">
              <input
                className="form-input"
                type="text"
                name="from_name"
                id="from_name"
                placeholder=" "
                value={userData.from_name}
                onChange={postUserData}
                required
              />
              <label htmlFor="from_name" className="form-floating-label">
                <FontAwesomeIcon icon={faUser} className="form-icon-inline" /> Full Name
              </label>
              <div className="form-input-focus-line"></div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-input-wrapper">
              <input
                className="form-input"
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder=" "
                value={userData.reply_to}
                onChange={postUserData}
                required
              />
              <label htmlFor="reply_to" className="form-floating-label">
                <FontAwesomeIcon icon={faEnvelope} className="form-icon-inline" /> Email Address
              </label>
              <div className="form-input-focus-line"></div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-input-wrapper">
              <input
                className="form-input"
                type="tel"
                name="phone"
                id="phone"
                placeholder=" "
                value={userData.phone}
                onChange={postUserData}
                required
              />
              <label htmlFor="phone" className="form-floating-label">
                <FontAwesomeIcon icon={faPhone} className="form-icon-inline" /> Phone Number
              </label>
              <div className="form-input-focus-line"></div>
            </div>
          </div>

          <div className="form-group message-group">
            <div className="form-input-wrapper">
              <textarea
                className="form-textarea"
                name="message"
                id="message"
                placeholder=" "
                value={userData.message}
                onChange={postUserData}
                required
              />
              <label htmlFor="message" className="form-floating-label">
                <FontAwesomeIcon icon={faCommentDots} className="form-icon-inline" /> Your Message
              </label>
              <div className="form-input-focus-line"></div>
            </div>
          </div>
        </div>

        <div className="form-submit-container">
          <button className="form-submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}{" "}
            <FontAwesomeIcon icon={faPaperPlane} className="btn-send-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;