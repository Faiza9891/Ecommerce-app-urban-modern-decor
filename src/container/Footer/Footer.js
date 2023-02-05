import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const date = new Date();
let year = date.getFullYear();
  return(
  
  <div className="app__footer section__padding" id="login">
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
        <div className="footer__copyright">
 © COPYRIGHT {year}
</div>
      </div>
);
}
export default Footer;