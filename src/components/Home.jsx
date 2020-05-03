import React, { Component } from "react";
import { Container } from "reactstrap";
import Cards from "../components/cards/cards";
import Footer from "../components/footer/footer";

import img1 from "../assets/hyundai-grand-i10.png";
import img2 from "../assets/ford-ecosport.jpg";
import img3 from "../assets/maruti-Suzuki-XL6.jpg";
import img4 from "../assets/honda-CR-V.jpg";

class Home extends Component {
  state = {
    cars: [
      {
        id: 0,
        imgUrl: img1,
        name: "Hyundai Grand i10",
        color: "Silver",
        price: 350,
        seat: "4 Seater",
        vehicleNo: "18 D 4356",
        type: "Petrol Car",
        engine: "Petrol Car 1.2 Kappa Dual VTVT BS6",
        descp:
          "The Hyundai Grand i10 has 1 Petrol Engine on offer. The Petrol engine is 1197 cc. ... Depending upon the variant and fuel type the Grand i10 has a mileage of 18.9 kmpl. The Grand i10 is a 5 seater Hatchback and has a length of 3765mm, width of 1660mm and a wheelbase of 2425mm.",
      },
      {
        id: 1,
        imgUrl: img2,
        name: "Ford EcoSport",
        color: "Blue",
        price: 1350,
        seat: "4 Seater",
        vehicleNo: "05 D 3670",
        type: "Petrol Car",
        engine: "Petrol Car 1.1 Kappa Dual VTVT BS6",
        descp:
          "Ford EcoSport. The Ford EcoSport (pronounced ek-ho sport) is a subcompact crossover SUV, originally built in Brazil by Ford Brazil since 2003, at the Camaçari plant. A second generation concept model was launched in 2012, and is also assembled in new factories in India, Thailand, Russia and Romania.",
      },
      {
        id: 2,
        imgUrl: img3,
        name: "Maruti Suzuki XL6",
        color: "Glossy Silver",
        price: 850,
        seat: "6 Seater",
        vehicleNo: "30 D 6718",
        type: "Fuel Car",
        engine: "Fuel Car 1.2 Kappa Dual VTVT BS6",
        descp:
          "The Maruti Suzuki XL6, although based on the Ertiga, is a premium MPV with rugged styling elements and added equipment. It packs features like automatic LED headlamps, cruise control and rains sensing wipers, and the sense of space is elevated with captain seats in the middle row.",
      },
      {
        id: 3,
        imgUrl: img4,
        name: "Honda CR-V",
        color: "Deep Blue",
        price: 450,
        seat: "4 Seater",
        vehicleNo: "21 D 1234",
        type: "Diesel Car",
        engine: "Diesel Car 1.5 Kappa Dual VTVT BS6",
        descp:
          "For 2020, Honda dropped the CR-V's powertrain lineup from two engines to one. Now, a turbocharged 1.5-liter four-cylinder engine comes standard, and it's rated at 190 horsepower and 179 pound-feet of torque. A continuously variable automatic transmission (CVT) is also standard.",
      },
    ],
  };

  render() {
    if (!localStorage.justOnce) {
      localStorage.setItem("justOnce", "true");
      window.location.reload();
    }
    let bookedlistId = [];
    let bookedCars = [];
    if (localStorage.getItem("bookedCars") === null) {
      bookedCars = [];
    } else {
      bookedCars = JSON.parse(localStorage.getItem("bookedCars"));

      for (let i = 0; i < bookedCars.length; i++) {
        bookedlistId.push(bookedCars[i].carid);
      }
    }

    localStorage.setItem("allCars", JSON.stringify(this.state.cars));
    let cars = this.state.cars.map((cars) => {
      return (
        <div className="row" key={cars.id}>
          <div className="col-md-12">
            <Cards cars={cars} bookedlistId={bookedlistId} />
          </div>
        </div>
      );
    });
    return (
      <Container fluid className="mt-5">
        <div className="row">
          <div className="col-md-12">
            <h3>Cars for Rent</h3>
            <hr />
          </div>
        </div>
        {cars}
        <Footer />
      </Container>
    );
  }
}

export default Home;
