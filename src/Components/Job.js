import React from "react";
import "./Job.css";

const Job=()=> {
    return(
        <div>
            <div className="jobInterview">
                <img src="Images/2.jpg" alt="jobInterview" style={{ width: '400px' }} />    
                <p>Even in a job interview your smile can lead to a favourable situation</p>
            </div>
            
            <button className="lastButton">Bring back your smile now</button>

        </div>
    );
};

export default Job;