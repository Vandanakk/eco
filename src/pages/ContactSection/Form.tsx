
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from "react";
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
    <>
    <form className="form">
      <h2 className="form-h2">Send us a message</h2>
      <label key="name" id="name" className="form-label">
        Name
        <input
         className="form-input"
          type="text"
          name="from_name"         
          placeholder="Alex Duc"
          value={userData.from_name}
          onChange={postUserData}
        />
      </label>
      <label id="phoneno" className="form-label">
        Phone number
        <input
         className="form-input"
          type="tel"
          name="phone"         
          placeholder="+61 44444444"
          value={userData.phone}
          onChange={postUserData}
        />
      </label>
      <label id="phoneno" className="form-label" key="phoneno">
        Email address
        <input
          className="form-input"
          type="email"
          name="reply_to"
          placeholder="a@b.com"
          value={userData.reply_to}
          onChange={postUserData}
        />
      </label>
      <label key="message" id="message" className="form-label">
        Message
        <input
          className="form-textarea"
          type="textarea"
          name="message"
          placeholder="How can we help you?"
          value={userData.message}
          onChange={postUserData}
        />
      </label>
      {/* {formInputs.map(input => (
        <label key={input.label} id={input.id} className="form-label">
          {input.label} 

          {input.type === 'textarea' ? (
            <textarea className="form-textarea" placeholder={input.placeholder} />
          ) : (
            <input
              className="form-input"
              type={input.type}
              placeholder={input.placeholder}
            
            />
          )}
        </label>
      ))} */}

      <Icon className="form-submit" icon={sendCircle} type="submit" onClick={submitData} />

      {/* {<button className="form-submit" >
        Send message
      </button>} */}
    </form>
    </>
  )
};

export default Form