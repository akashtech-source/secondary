import React from 'react';
import logo from '../../../src/fcblogo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div className="solgan">
            <h1>Squad List</h1>
            </div>
        </div>
    );
};

export default Header;