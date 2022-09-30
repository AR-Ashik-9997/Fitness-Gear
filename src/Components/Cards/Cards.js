import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
import logo from './../images/logo.jpg';
import Activity from "../Activity/Activity";
import Question from "../Questions/Question";

const Cards = () => {
  const [fitnesses, setFitnesses] = useState([]);
  const [activities,setActivities]=useState([]);
  useEffect(() => {
    fetch("fitness.json")
      .then((res) => res.json())
      .then((data) => setFitnesses(data));
  }, []);
  const handleAddToActivity=(fitnesses)=>{
    const newActivity=[...activities,fitnesses];
    setActivities(newActivity);
  
  }
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
                <Card key={fitness.id} fitness={fitness} handleAddToActivity={handleAddToActivity}></Card>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-10">          
          <Question></Question>
        </div>
        
      </div>
      <div className="activity-container container mb-5">
        <Activity activities={activities}></Activity>
      </div>
    </div>
  );
};

export default Cards;
