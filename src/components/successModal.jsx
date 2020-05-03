import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./modal-style.css";

class SuccessModal extends Component {
  state = {};
  render() {
    localStorage.removeItem("justOnce");
    return (
      <div className="popup">
        <div className="popup_inner">
          <h3>Booking Confirmed!</h3>
          <hr />
          <p>{this.props.text}</p>
          <Link to="/">
            <button className="btn btn-primary" onClick={this.props.closePopup}>
              Continue
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SuccessModal;
