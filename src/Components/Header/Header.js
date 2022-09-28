import React from "react";
import logo from "./../images/logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="mt-5 d-flex align-items-center">
        <img src={logo} alt="" className="img-fluid img rounded-circle" />
        <h1 className="text-info p-4">FITNESS GEAR</h1>        
      </div>
      <h4 className="mt-5">Select today's excersise</h4>
    </div>
  );
};

export default Header;
