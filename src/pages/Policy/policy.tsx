import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Policy = () => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>           
At Ecowoodies, we are committed to protecting your privacy. This Privacy 
Policy explains how we collect, use, and disclose your personal information
in connection with your use of our website www.ecowoodies.com.
</p>

);
const policyText2 = (
<p> 
<h4> Collection of Information </h4>


We collect personal information that you provide to us, such as your name,
email address, phone number, and mailing address, when you fill out forms 
on our website, create an account, place an order, or contact us for support.
We may also collect information about your browsing behavior on our website, 
including your IP address, browser type, and operating system.
</p>
) 
const policyText3 = (
    <p> 
        <h4> Use of Information</h4>

We use your personal information to provide and improve our services,
fulfill your orders, and communicate with you about your account or purchases.
We may also use your information to send you marketing communications about our
products and services that we think may be of interest to you, but you may opt 
out of receiving these communications at any time.
</p>
)
const policyText4 = (
    <p>
<h4>Disclosure of Information </h4>

We may share your personal information with third-party service providers that
help us operate our website or provide our services, such as payment processors,
 shipping companies, and marketing agencies. We may also disclose your information
 if required by law or to protect our legal rights.

 </p>
)
const policyText5 = (
    <p><h4> Data Security </h4>

We take reasonable measures to protect your personal information from unauthorized access,
disclosure, alteration, or destruction. However, no security system is perfect, and
we cannot guarantee the security of your information.
</p>
)
const policyText6 = (
    <p><h4>
Data Retention</h4>

We retain your personal information for as long as necessary to provide our services
to you or as required by law. We may also retain your information for a reasonable 
period of time afterward to fulfill our legitimate business interests, such as resolving
disputes or enforcing our agreements.
</p>
)
const policyText7 = (
    <p><h4>
Your Rights </h4>

You have the right to access, update, or delete your personal information that we hold.
You may also object to our use of your information or request that we restrict its processing.
To exercise these rights, please contact us at info@ecowoodies.com.
</p>
)
const policyText8 = (
    <p><h4>
Changes to this Policy</h4>

We may update this Privacy Policy from time to time to reflect changes in our practices or 
applicable law. We will notify you of any material changes by posting a notice on our website
or by sending you an email.
</p>
)
const policyText9 = (
    <p><h4>
Contact Us</h4>

If you have any questions or concerns about this Privacy Policy or our practices regarding
your personal information, please contact us at info@ecowoodies.com.
   </p>
)    
   


    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
                {policyText2}
                {policyText3}
                {policyText4}
                {policyText5}
                {policyText6}
                {policyText7}
                {policyText8}
                {policyText9}
                
            </Modal>
        </>
    );
};

export default Policy;