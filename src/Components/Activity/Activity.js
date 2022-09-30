import React, { useEffect, useState } from "react";
import { addToDb, getStoredTime } from "../../Utilities/localStorage";
import pic from "./../images/ar.jpg";
import "./Activity.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Activity = (props) => {
  const { activities } = props;
  let time = 0;
  for (const activity of activities) {
    time = time + activity.time;
  }
  const [exTimes, setExTimes] = useState([]);
  const handleAddToTime = (e) => {
    setExTimes(e.target.value);
    addToDb(e.target.value);
  };

  useEffect(() => {
    const getTime = getStoredTime();
    setExTimes(getTime);
  }, []);
  const notify = () => toast("congratulation you are done with your activity");
  return (
    <div className="container activity mb-5">
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
        <button
          className="btn-round btn-btn-primary"
          onClick={handleAddToTime}
          value="10"
        >
          10s
        </button>
        <button
          className="btn-round btn-primary"
          onClick={(e) => handleAddToTime(e)}
          value="30"
        >
          30s
        </button>
        <button
          className="btn-round btn-primary"
          onClick={(e) => handleAddToTime(e)}
          value="20"
        >
          20s
        </button>
        <button
          className="btn-round btn-primary"
          onClick={(e) => handleAddToTime(e)}
          value="40"
        >
          40s
        </button>
        <button
          className="btn-round btn-primary"
          onClick={(e) => handleAddToTime(e)}
          value="50"
        >
          50s
        </button>
      </div>
      <h4 className="mt-5">Excersise Details</h4>
      <div className="mt-3 d-flex justify-content-between align-items-center shadow-none p-3 mb-4 bg-light rounded">
        <h5>Excersise time</h5>
        <p>{time} seconds</p>
      </div>
      <div className="d-flex justify-content-between align-items-center shadow-none p-3 mb-5 bg-light rounded">
        <h5>Break time</h5>
        <p id="times">{exTimes ? exTimes : 0} seconds</p>
      </div>
      <button className="btn btn-primary w-100 fw-bold" onClick={notify}>
        Activity Completed
      </button>
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default Activity;
