import React from 'react'
import './Home.css';
import Meeting from './Meeting';
import FormSection from './FormSection';
import Data from './MeetingData';


function Home() {
  return (
    <>
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
  )
}

export default Home