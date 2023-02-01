import React from "react";
import "./Header.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header=()=> {
    return(
        <div className="header">
            <h2>Dental Lux</h2>
            <button type="button" className="btn btn-dark px-4">Sign In</button>
        </div>
    );
};

export default Header;