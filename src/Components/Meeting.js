import React from "react";
import "./Meeting.css";


const Meeting=(props)=> {
    return(
            <div className="containerMeeting">
                <div className="containerCard">
                    <img src={props.imgsrc} alt="Girl" />
                    <p>{props.text}</p>
                </div>
            </div>
        );
};


export default Meeting;
