import React from 'react';
import logo from './../images/logo.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className='container mt-5 d-flex align-items-center'>
            <img src={logo} alt="" className='img-fluid img rounded-circle' />
           <h1 className='text-info p-4'>FITNESS GEAR</h1> 
        </div>
    );
};

export default Header;