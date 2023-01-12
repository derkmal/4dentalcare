import React from "react";
import "./Meeting.css";

const Meeting=()=> {
    return(
        <div>
            <div className="h1h2Button">
                <h1>Receive the best dental treatment to avoid crooked-teeth problem</h1>
                <h2>We will give you the accurate assessment to find out which braces best suit you.</h2>
                <button>Bring back your smile now</button>
            </div>

            <div className="girlSmile">
                <img src="Images/1.jpg" alt="Girl" style={{ width: '200px' }} />
                <h3>Well-aligned teeth and fresher breath always leave a good impression when meeting a person for the first time.</h3>
            </div>
        </div>
    );
};
export default Meeting;
