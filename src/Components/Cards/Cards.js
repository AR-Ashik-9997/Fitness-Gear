import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [fitnesses, setFitnesses] = useState([]);
  useEffect(() => {
    fetch("fitness.json")
      .then((res) => res.json())
      .then((data) => setFitnesses(data));
  }, []);
  
  return (
    <div className="container mt-5">
      <h4 className="mb-5">Select todays excersize</h4>
      <div className="cards-container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="row g-4">
              {fitnesses.map((fitness) => (                
                  <Card key={fitness.id} fitness={fitness}></Card>                
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cards;
