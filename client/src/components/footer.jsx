import React from "react";


import "../css/footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";
import controller1 from "../images/controller-1.jpg"
import LOGO from "../images/LOGO.png"
const Footer = () => {
  return (

    <>








    <footer className="gaming-footer">
      <div className="footer-content">
     <div className="last-sec-img">
            <img src={controller1}  width={"100%"}/>
          </div>
        <div className="footer-logo">
          <h2>GameZone    <img src={LOGO} style={{width:"55px"}}/>    </h2>
          <p>Your ultimate gaming store. Play. Stream. Dominate.</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>PC Games</li>
            <li>Console Games</li>
            <li>Accessories</li>
            <li>Merch</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaDiscord />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GameZone. All rights reserved.</p>
      </div>
    </footer>
    </>

  );
};

export default Footer;
