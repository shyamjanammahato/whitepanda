import React, { Component } from "react";
import "./footer-style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small blue pt-5 mt-5">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Rent VRoom</h5>
              <p>
                Rentvroom Pvt. Ltd. No: 296, 3rd Cross Rd, Jakkasandra, 1st
                Block, Koramangla Bengaluru, Karnataka 560034
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link className="btn-floating btn-fb mx-2" to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className="btn-floating btn-tw mx-2" to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link className="btn-floating btn-gplus mx-2" to="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms of Service </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
