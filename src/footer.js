import React, { Component } from 'react';
import './footer.css';
import Footerlink from './footerlink.js';

import linkedin from "./images/linkedin.png";
import github from "./images/github.png";

class Footer extends Component {
  render() {
    return (
        <div className="Footer">
          <h2 className="getintouch">Connect with me:</h2>
          <div className="email-container">
            <a className="email" href = "mailto: elena.chen@berkeley.edu">elena.chen@berkeley.edu</a>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/ziyielenachen/" target="_blank"><img className="link" src={linkedin} alt="linkedin"/></a>
            <a href="https://github.com/ziyielenachen" target="_blank"><img className="link" src={github} alt="github"/></a>
          </div>
        </div>
    );
  }
}

export default Footer;