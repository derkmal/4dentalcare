import React from "react";
import "./Meeting.css";


const Meeting=(Meeting)=> {
    return(
            <div className="container">
                <img src={Meeting.imgsrc} alt="Girl" style={{ width: '400px' }} />
                <p>{Meeting.text}</p>
            </div>
    );
};
export default Meeting;
