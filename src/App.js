import React from 'react';
import Header from './Components/Header';
import Meeting from './Components/Meeting';
import './App.css';
// import Job from './Components/Job';

const App=()=> {
    return(
        <>
            <Header />
            <div className="container">
                <h1>RECEIVE THE BEST DENTAL TREATMENT TO AVOID CROOKED-TEETH PROBLEM</h1>
                <h2>We will give you the accurate assessment to find out which braces best suit you.</h2>
            </div>
            <Meeting 
                imgsrc="../Images/1.jpg "
                text="Well-aligned teeth and fresher breath always leave a good impression when meeting a person for the first time."
            />
            {/* <Job />         */}
        </>
    );
};

export default App;