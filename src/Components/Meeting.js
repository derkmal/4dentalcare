import React from "react";
import "./Meeting.css";


const Meeting=()=> {
    return(
        <div>
            <div className="h1h2Button">
                <h1>RECEIVE THE BEST DENTAL TREATMENT TO AVOID CROOKED-TEETH PROBLEM</h1>
                <h2>We will give you the accurate assessment to find out which braces best suit you.</h2>
                <button className="firstButton">Bring back your smile now</button>
            </div>

            <div className="girlSmile">
                <img src="Images/1.jpg" alt="Girl" style={{ width: '400px' }} />
                <p>Well-aligned teeth and fresher breath always leave a good impression when meeting a person for the first time.</p>
            </div>
        </div>
    );
};
export default Meeting;
