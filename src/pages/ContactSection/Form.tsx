
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faCommentDots, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Name', placeholder: 'Sumit Rao' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+91 9999999999',

  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'name@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your Mesage',
    placeholder: 'How can we help you?',
  },
]

const Form = () => {
  
  const [userData, setUserData] = useState({
    from_name: "",
    phone: "",
    reply_to: "",
    message: ""
  });

  let name, value;
  const postUserData = (event: any) => {
    name = event.target.name
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };



  // connect with firebase
  const submitData = async (event: any) => {
    event.preventDefault();
    const { from_name, phone, reply_to, message } = userData;


    if (from_name && phone && reply_to && message) {
      const inputData = JSON.stringify({
        from_name,
        phone,
        reply_to,
        message,
      });
      emailjs.send('service_tc8ac9a', 'template_0l67lvq', userData, '3wu5xegb9BGPZ678e')
        .then((result) => {

          setUserData({
            from_name: "",
            phone: "",
            reply_to: "",
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
    <form className="form" onSubmit={submitData}>
      <div className="form-grid">
        <div className="form-field-group">
          <label key="name" id="name" className="form-label">
            <span className="form-label-text">
              <FontAwesomeIcon icon={faUser} className="form-label-icon" /> Name
            </span>
            <input
              className="form-input"
              type="text"
              name="from_name"         
              placeholder="Alex Duc"
              value={userData.from_name}
              onChange={postUserData}
            />
          </label>

          <label id="email" className="form-label" key="email">
            <span className="form-label-text">
              <FontAwesomeIcon icon={faEnvelope} className="form-label-icon" /> Email address
            </span>
            <input
              className="form-input"
              type="email"
              name="reply_to"
              placeholder="a@b.com"
              value={userData.reply_to}
              onChange={postUserData}
            />
          </label>
        </div>

        <div className="form-field-group">
          <label id="tel" className="form-label">
            <span className="form-label-text">
              <FontAwesomeIcon icon={faPhone} className="form-label-icon" /> Phone number
            </span>
            <input
              className="form-input"
              type="tel"
              name="phone"         
              placeholder="+61 44444444"
              value={userData.phone}
              onChange={postUserData}
            />
          </label>

          <label key="message" id="message" className="form-label message-label">
            <span className="form-label-text">
              <FontAwesomeIcon icon={faCommentDots} className="form-label-icon" /> Message
            </span>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="How can we help you?"
              value={userData.message}
              onChange={postUserData}
            />
          </label>
        </div>
      </div>

      <div className="form-submit-container">
        <button className="form-submit-btn" type="submit">
          Send Message <FontAwesomeIcon icon={faArrowRight} className="btn-arrow-icon" />
        </button>
      </div>
    </form>
  )
};

export default Form