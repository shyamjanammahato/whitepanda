import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faWheelchair,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

class Cards extends Component {
  bookNowRender() {
    let returnItem = 0;
    this.props.bookedlistId.forEach((item) => {
      if (parseInt(item) === this.props.cars.id) {
        returnItem = (
          <button
            type="button"
            className="btn btn-outline-secondary btn-text text-danger"
            disabled
          >
            Unavailable
          </button>
        );
      }
    });

    if (returnItem === 0) {
      return (
        <Link to={"/book-car/" + this.props.cars.id}>
          <button type="button" className="btn btn-text btn-secondary">
            Book Now
          </button>
        </Link>
      );
    } else {
      return returnItem;
    }
  }
  render() {
    let { id, imgUrl, name, color, seat, price } = this.props.cars;

    // console.log(this.props.bookedlistId);
    return (
      <div className="card mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <img
                src={imgUrl}
                style={{ height: 170 }}
                alt=""
                className="card-img-top img-thumbnail small-height"
              />
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 mt-5 mobile-style">
              <h5 className="card-title">{name}</h5>
              <p>
                <FontAwesomeIcon icon={faPaintBrush} /> {color}{" "}
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faWheelchair} /> {seat}
              </p>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 mt-5 mobile-style">
              <h5 className="card-title">Price</h5>
              <p>
                <FontAwesomeIcon icon={faRupeeSign} /> {price} /day
              </p>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 mt-5 mb-2 mobile-style">
              {this.bookNowRender()}
              &nbsp;&nbsp;
              <Link to={"/car-details/" + id}>
                <button type="button" className="btn btn-light btn-text">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
