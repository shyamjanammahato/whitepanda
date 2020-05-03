import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "./footer/footer";
import DatePicker from "react-datepicker";

import SuccessModal from "./successModal";

import "react-datepicker/dist/react-datepicker.css";

let carName;

class BookCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carid: this.props.match.params.car_id,
      name: "",
      nameError: "",
      contact: "",
      contactError: "",
      issueDate: "",
      issueDateError: "",
      returnDate: "",
      returnDateError: "",
      showPopup: false,
    };
  }
  //success message on modal
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  //form validation
  Valid() {
    let currDate = new Date();
    if (this.state.name.length <= 0) {
      this.setState({
        nameError: "Name is required",
      });
    } else if (
      this.state.contact.length <= 0 ||
      this.state.contact.length < 10 ||
      this.state.contact.length > 10
    ) {
      this.setState({
        contactError: "Invaild contact number",
      });
    } else if (this.state.issueDate.length <= 0) {
      this.setState({
        issueDateError: "Issue Date is required",
      });
    } else if (this.state.returnDate.length <= 0) {
      this.setState({
        returnDateError: "Return Date is required",
      });
    } else if (currDate.getTime() > this.state.issueDate.getTime()) {
      this.setState({
        issueDateError: "Selected date already passed",
      });
    } else if (
      this.state.returnDate.getTime() < this.state.issueDate.getTime()
    ) {
      this.setState({
        returnDateError: "Return Date can not be before issue date",
      });
    } else {
      return true;
    }
  }
  //get booked car details from localstorage
  setData(object) {
    let bookedcars;
    if (localStorage.getItem("bookedCars") === null) {
      bookedcars = [];
    } else {
      bookedcars = JSON.parse(localStorage.getItem("bookedCars"));
    }
    bookedcars.push(object);
    localStorage.setItem("bookedCars", JSON.stringify(bookedcars));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.Valid()) {
      this.getCarName();
      this.togglePopup();
      // alert( JSON.stringify(this.state));
      // console.log(JSON.stringify(this.state));
      this.setData(this.state);
      e.preventDefault();
    }
  };

  handleIssueDate = (date) => {
    this.setState({
      issueDateError: "",
      issueDate: date,
    });
  };
  handleReturnDateChange = (date) => {
    this.setState({
      returnDateError: "",
      returnDate: date,
    });
  };
  handleNameChange = (event) => {
    this.setState({
      nameError: "",
      name: event.target.value,
    });
  };
  handleContactChange = (event) => {
    this.setState({
      contactError: "",
      contact: event.target.value,
    });
  };
  //get booked car name to show on modal
  getCarName() {
    let allCars = JSON.parse(localStorage.getItem("allCars"));
    allCars.forEach((item) => {
      if (item.id === parseInt(this.props.match.params.car_id)) {
        carName = item.name;
      }
    });
  }

  render() {
    // console.log(this.props);
    const carId = this.props.match.params.car_id;
    return (
      <Container fluid className="mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Booking Details</h3>
          </div>
        </div>
        <hr />
        <div className="row mt-5 mb-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="hidden" name="carid" value={carId} />
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="name"
                      noValidate
                      onChange={this.handleNameChange}
                    />
                    <p className="text-danger">{this.state.nameError}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+91 "
                      name="contact"
                      noValidate
                      maxLength="10"
                      onChange={this.handleContactChange}
                    />
                    <p className="text-danger">{this.state.contactError}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Issue Date</label>
                    <br />
                    <DatePicker
                      className="form-control"
                      placeholderText="mm/dd/yyyy"
                      selected={this.state.issueDate}
                      onChange={this.handleIssueDate}
                      name="issueDate"
                      noValidate
                    />
                    <p className="text-danger">{this.state.issueDateError}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Return Date</label>
                    <br />
                    <DatePicker
                      className="form-control"
                      placeholderText="mm/dd/yyyy"
                      name="returnDate"
                      noValidate
                      selected={this.state.returnDate}
                      onChange={this.handleReturnDateChange}
                    />
                    <p className="text-danger">{this.state.returnDateError}</p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <Link to={"/car-details/" + carId}>
                    <button className="btn btn-light">Back </button>&nbsp;&nbsp;
                  </Link>
                  <button type="submit" className="btn btn-secondary">
                    Book Car
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2">
            {/* <button onClick={this.togglePopup.bind(this)}>
              {" "}
              Click To Launch Popup
            </button> */}

            {this.state.showPopup ? (
              <SuccessModal
                text={`You have booked ${carName} for the duration ${this.state.issueDate} - ${this.state.returnDate} `}
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
          </div>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default BookCar;
