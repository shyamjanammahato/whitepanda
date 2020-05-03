import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home";
import CarDetails from "./components/car-details";
import BookCar from "./components/book-car";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Redirect exact from="/index.html" to="/home" />
          <Redirect exact from="/" to="/home" />
          <Route exact path="/car-details/:car_id" component={CarDetails} />
          <Route exact path="/book-car/:car_id" component={BookCar} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
