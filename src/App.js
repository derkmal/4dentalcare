import React from 'react';
import Navbar from './Components/Navbar';
import Meeting from './Components/Meeting';
import FormSection from './Components/FormSection';
import './App.css';
import Data from './Components/MeetingData';
import SignIn from './Components/SignIn';
// import {Routes,Route} from 'react-router-dom';

    const App=()=> {
        return(
            <>
                <Navbar />
                {/* <Routes>
                    <Route exact path="/singin" ></Route>    
                </Routes> */}
                <div className="containerHeader">
                    <h1>Receive The Best Dental Treatment To Avoid Crooked-Teeth Problem</h1>
                    <h2>We will give you the accurate assessment to find out which braces best suit you.</h2>
                </div>
                
                <div className="containerMeeting">
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
                </div>

                <FormSection />
            </>
        );
    };

export default App;