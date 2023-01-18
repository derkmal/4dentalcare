import React from 'react';
import Header from './Components/Header';
import Meeting from './Components/Meeting';
import './App.css';
import Data from './Components/MeetingData';

const App=()=> {
    return(
        <>
            <Header />
            <div className="containerHeader">
                <h1>RECEIVE THE BEST DENTAL TREATMENT TO AVOID CROOKED-TEETH PROBLEM</h1>
                <h2>We will give you the accurate assessment to find out which braces best suit you.</h2>
            </div>
            {Data.map((values)=>{
                return(
                    <>
                        <Meeting 
                            key={values.id}
                            imgsrc={values.imgsrc}
                            text={values.text}
                        />
                    </>
                )
            })}
        </>
    );
};

export default App;