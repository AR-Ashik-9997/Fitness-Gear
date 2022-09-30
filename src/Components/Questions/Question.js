import React from "react";
import './Question.css';

const Question = () => {
  return (
    <div className="container mt-5 py-5 mb-5">
      <h2 className="text-center fw-bold">Answer to the simple 3 questions</h2>
      <div className="accordion mt-5" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How does react work?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              ReactJS divides the UI into isolated reusable pieces of code known
              as components. React components work similarly to JavaScript
              functions as they accept arbitrary inputs called properties or
              props. It's possible to have as many components as necessary
              without cluttering your code.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              difference between props and state in react?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The state is the local state of the component which cannot be
              accessed and modified outside of the component. It's equivalent to
              local variables in a function. Props, on the other hand, make
              components reusable by giving components the ability to receive
              data from their parent component in the form of props.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What useEffects are used?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <li>Running once on mount: fetch API data.</li>
              <li>Running on state change: validating input field.</li>
              <li>Running on state change: live filtering.</li>
              <li>Running on state change: trigger animation on new array value.</li>
              <li>Running on props change: update paragraph list on fetched API data update.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
