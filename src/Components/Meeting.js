import React from "react";
import "./Meeting.css";


const Meeting=(props)=> {
    return(
            <div className="container">
                <img src={props.imgsrc} alt="Girl" style={{ width: '400px' }} />
                <p>{props.text}</p>
            </div>
    );
};
export default Meeting;
