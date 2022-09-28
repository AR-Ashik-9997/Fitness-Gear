import React from "react";
import "./Card.css";
const Card = (props) => {
  const { name, description, age, time, img } = props.fitness;
  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <img src={img} className="card-img" alt="" />
        <div className="card-body">
          <h5 className="card-title fs-3 fw-bold">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="fw-bold">For age: {age}</p>
          <p className="fw-bold">Time required: {time}s</p>
          <button className="btn btn-primary w-100">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
