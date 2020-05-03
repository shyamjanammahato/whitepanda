import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import {
  faPaintBrush,
  faWheelchair,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer/footer";
import "./cards/card-style.css";

let bookedlistId = [];
let bookedCarDetails = {
  bookingName: "",
  bookingContact: "",
  bookingIssueDate: "",
  bookingReturnDate: "",
};

//get booked car details from localstorage
let bookedCars = [];
if (localStorage.getItem("bookedCars") === null) {
  bookedCars = [];
} else {
  bookedCars = JSON.parse(localStorage.getItem("bookedCars"));

  for (let i = 0; i < bookedCars.length; i++) {
    bookedlistId.push(bookedCars[i]);
  }
}

class CarDetails extends Component {
  bookNowRender() {
    let returnItem = 0;
    bookedlistId.forEach((item) => {
      if (item.carid === this.props.match.params.car_id) {
        bookedCarDetails.bookingName = item.name;
        bookedCarDetails.bookingContact = item.contact;
        bookedCarDetails.bookingIssueDate = item.issueDate;
        bookedCarDetails.bookingReturnDate = item.returnDate;
        returnItem = (
          <button
            type="button"
            className="btn btn-outline-secondary text-danger descp-btn-text"
            disabled
          >
            Unavailable
          </button>
        );
      }
    });

    if (returnItem === 0) {
      bookedCarDetails.bookingName = "";
      bookedCarDetails.bookingContact = "";
      bookedCarDetails.bookingIssueDate = "";
      bookedCarDetails.bookingReturnDate = "";
      return (
        <Link to={"/book-car/" + this.props.match.params.car_id}>
          <button type="button" className="btn btn-secondary descp-btn-text">
            Book Now
          </button>
        </Link>
      );
    } else {
      return returnItem;
    }
  }

  render() {
    let getAllCars = JSON.parse(localStorage.getItem("allCars"));
    const carId = this.props.match.params.car_id;
    let {
      imgUrl,
      name,
      color,
      seat,
      price,
      vehicleNo,
      type,
      engine,
      descp,
    } = getAllCars[carId];

    return (
      <Container fluid className="mt-5">
        <div className="row">
          <div className="col-md-12">
            <Link to="/">
              <button className="btn btn-light">Back </button>
            </Link>
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <img
                      src={imgUrl}
                      style={{ height: 250 }}
                      alt={name}
                      className="card-img-top small-height"
                    />
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12 mt-5">
                    <h5 className="card-title">{name}</h5>
                    <p>
                      <FontAwesomeIcon icon={faPaintBrush} /> {color}
                      &nbsp;&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faWheelchair} /> {seat}
                    </p>
                    <p>
                      Rent per day: <FontAwesomeIcon icon={faRupeeSign} />
                      {price} &nbsp;&nbsp; /day
                    </p>
                    {this.bookNowRender()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h3>Car Details</h3>
            <hr />
            <p>Vehicle Number: {vehicleNo} </p>
            <p>{type}</p>
            <p>{engine}</p>
            <p>{descp}</p>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-12">
            <h3>Current Booking</h3>
            <MDBTable>
              <MDBTableHead color="primary-color">
                <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Issue Date</th>
                  <th>Return Date</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>{bookedCarDetails.bookingName}</td>
                  <td>{bookedCarDetails.bookingContact}</td>
                  <td>{bookedCarDetails.bookingIssueDate}</td>
                  <td>{bookedCarDetails.bookingReturnDate}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
        <hr />
        <Footer />
      </Container>
    );
  }
}
export default CarDetails;
