import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,      
    faFacebook,
    faYoutube,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import PrivacyModal from "../Policy/policy"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Ecowoodies. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://www.facebook.com/ecowoodies/"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.instagram.com/ecowoodies/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                    
                    </a>
         
                <a
                    href="https://twitter.com/ecowoodies"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>          
              
                <a
                    href="https://youtube.com/@ecowoodies"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>          
              

                {false && <PrivacyModal />}
            </div>
        </footer>
    );
};

export default Footer;