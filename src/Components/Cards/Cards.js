import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
import logo from './../images/logo.jpg';

const Cards = () => {
  const [fitnesses, setFitnesses] = useState([]);
  useEffect(() => {
    fetch("fitness.json")
      .then((res) => res.json())
      .then((data) => setFitnesses(data));
  }, []);
  return (
    <div className="main-container">
      <div className="cards-container container mt-5 mb-4">
        <div className="d-flex align-items-center">
          <img src={logo} alt="" className="img-fluid img rounded-circle" />
          <h1 className="text-info p-4">FITNESS GEAR</h1>
        </div>
        <h4 className="mt-4">Select today's excersise</h4>
        <div className="row g-4 mt-4">
          <div className="col-lg-10">
            <div className="row g-4">
              {fitnesses.map((fitness) => (
                <Card key={fitness.id} fitness={fitness}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="activity-container bg-danger">
        <h1>hello activity</h1>
      </div>
    </div>
  );
};

export default Cards;
