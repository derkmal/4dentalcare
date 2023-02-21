import React from "react";
import "./Navbar.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
// import {Routes,Route} from 'react-router-dom';



const Navbar=()=> {
    return(
        <div className="header">
            <h2>Dental Lux</h2>
            {/* <button type="button" className="btn btn-dark px-4">Sign In</button> */}
            <NavLink to="/">
                <li className="nav-item nav-link">Home</li>
            </NavLink>
            <NavLink to="/signin">
                <li className="btn btn-dark">Sign In</li>
            </NavLink>
        </div>
    );
};

export default Navbar;