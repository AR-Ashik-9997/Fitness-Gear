import React from "react";
import pic from "./../images/ar.jpg";
import "./Activity.css";

const Activity = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center mt-4">
        <img src={pic} alt="" className="img rounded-circle" />
        <div className="p-2">
          <h5 className="mb-0">Md. Ashikur Rahman</h5>
          <p>Rajshahi, Bangladesh</p>
        </div>
      </div>
      <div className="mt-5 d-flex align-items-center justify-content-evenly shadow-none p-3 mb-3 bg-light rounded">
        <div>
          <h4 className="fw-bold"> 75kg </h4>
          <p>Weight</p>
        </div>
        <div>
          <h4 className="fw-bold"> 5.4 </h4>
          <p>Height</p>
        </div>
        <div>
          <h4 className="fw-bold"> 25yr </h4>
          <p>Age</p>
        </div>
      </div>
      <h4 className="mt-4">Add a Break</h4>
      <div className="d-flex align-items-center justify-content-evenly mt-4 shadow-none p-3 mb-5 bg-light rounded">
        <button className="btn-round btn-btn-primary">10s</button>
        <button className="btn-round btn-primary">30s</button>
        <button className="btn-round btn-primary">20s</button>
        <button className="btn-round btn-primary">40s</button>
        <button className="btn-round btn-primary">50s</button>
      </div>
      <h4 className="mt-5">Excersise Details</h4>
      <div className="mt-3 d-flex justify-content-between align-items-center shadow-none p-3 mb-4 bg-light rounded">
        <h5>Excersise time</h5>
        <p>0 seconds</p>
      </div>
      <div className="d-flex justify-content-between align-items-center shadow-none p-3 mb-5 bg-light rounded">
        <h5>Break time</h5>
        <p>0 seconds</p>
      </div>
      <button className="btn btn-primary w-100 fw-bold">Activity Completed</button>
    </div>
  );
};

export default Activity;
